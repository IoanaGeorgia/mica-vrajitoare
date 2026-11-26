'use client';

import { useState, useEffect, Suspense } from "react";
import Gallery from "@/components/gallery/gallery";
import Loading from "@/components/commons/loading";
import Error from "@/components/commons/error";

export default function PlantPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pageDesc = {
    title: "Plante",
    desc: "Invata despre plante si cum ele sustin intreaba viata din univers",
  };

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    fetch("/api/items?type=plante")
      .then((res) => {
        if (!res.ok) throw new Error("Nu s-au putut încărca plantele.");
        return res.json();
      })
      .then((data) => {
        if (!active) return;
        const list = Array.isArray(data) ? data : data.items || [];
        setItems(list);
      })
      .catch((err) => {
        if (!active) return;
        setError(err.message || "Eroare la încărcarea datelor.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Suspense fallback={<div className="no-data">Se încarcă...</div>}>
      <Gallery
        pageDesc={pageDesc}
        itemData={items}
        linkHref="/plante"
      />
    </Suspense>
  );
}