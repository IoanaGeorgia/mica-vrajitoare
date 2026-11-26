'use client';

import { useState, useEffect, Suspense } from "react";
import Gallery from "../../components/gallery/gallery";
import { fetchItems } from "../services/fetchService";
import Loading from "@/components/commons/loading";
import Error from "@/components/commons/error";

export default function CautarePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pageDesc = {
    title: "Cautare",
    desc: "Am cautat pe tot site-ul.",
  };

  useEffect(() => {
    let active = true;

    async function loadAllItems() {
      try {
        setLoading(true);
        const data = await fetchItems();
        if (active) {
          setItems(Array.isArray(data) ? data : data.items || []);
        }
      } catch (err) {
        if (active) {
          setError(err.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadAllItems();

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
        itemData={items}
      />
    </Suspense>
  );
}