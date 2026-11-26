'use client';

import { Suspense, useEffect, useState } from "react";
import Gallery from "../../components/gallery/gallery";
import { fetchItems } from "../services/fetchService";
import Loading from "@/components/commons/loading";
import Error from "@/components/commons/error";

export default function SemndeCartePage() {
  const [finalItems, setFinalItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pageDesc = {
    title: "Semne de carte",
    desc: "Ai salvate aici paginile pe care le-ai vizitat si care ti-au placut cel mai mult",
  };

  useEffect(() => {
    let active = true;

    async function loadBookmarks() {
      try {
        setLoading(true);
        setError(null);

        const savedRaw = localStorage.getItem("bookMarkList");
        const savedSlugs = savedRaw ? JSON.parse(savedRaw) : [];

        if (!Array.isArray(savedSlugs) || savedSlugs.length === 0) {
          if (active) setFinalItems([]);
          return;
        }

        const data = await fetchItems();
        const allItems = Array.isArray(data) ? data : data.items || [];

        const matched = savedSlugs
          .map((slug) => allItems.find((item) => item.site_slug === slug))
          .filter(Boolean);

        if (active) {
          setFinalItems(matched);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Eroare la încărcarea semnelor de carte.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadBookmarks();

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
    <Suspense fallback={<div className="no-data">Se încarca...</div>}>
      <Gallery
        pageDesc={pageDesc}
        itemData={finalItems}
      />
    </Suspense>
  );
}