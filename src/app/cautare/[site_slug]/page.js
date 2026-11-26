'use client';

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import GalleryItem from "../../../components/galleryItem/galleryItem";
import { fetchItems } from "../../services/fetchService";
import Loading from "@/components/commons/loading";

export default function TermenCautatPage() {
  const params = useParams();
  const slug = params?.site_slug || params?.slug;

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    if (!slug) return;

    let active = true;

    async function loadItem() {
      try {
        setLoading(true);
        setMissing(false);

        const allList = await fetchItems();
        const all = Array.isArray(allList) ? allList : allList.items || [];
        const found = all.find((p) => p.site_slug === slug);

        if (!active) return;

        if (!found) {
          setMissing(true);
        } else {
          setItem(found);
        }
      } catch {
        if (active) setMissing(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadItem();

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