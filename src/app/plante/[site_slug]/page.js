'use client';

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import GalleryItem from "../../../components/galleryItem/galleryItem";
import Loading from "@/components/commons/loading";

export default function PlantDetailPage() {
  const params = useParams();
  const slug = params?.site_slug || params?.slug;

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    if (!slug) return;

    let active = true;
    setLoading(true);
    setMissing(false);

    fetch("/api/items?type=plante")
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        const list = Array.isArray(data) ? data : data.items || [];
        const found = list.find((p) => p.site_slug === slug);
        if (!found) {
          setMissing(true);
        } else {
          setItem(found);
        }
      })
      .catch(() => {
        if (active) setMissing(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug]);

  if (missing) {
    notFound();
  }

  if (loading) {
    return <Loading />;
  }

  return <GalleryItem item={item} />;
}