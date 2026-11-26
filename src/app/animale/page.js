"use client";

import { Suspense, useEffect, useState } from "react";
import Gallery from "../../components/gallery/gallery";
import { fetchItems } from "../services/fetchService";
import Loading from "@/components/commons/loading";
import Error from "@/components/commons/error";

export default function AnimalePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    async function loadItems() {
      try {
        setLoading(true);
        const data = await fetchItems({ type: "animale" });
        if (active) {
          setItems(data);
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

    loadItems();

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

  const typeInfo = items[0]?.type;
  const pageDesc = {
    title: typeInfo?.title ? capitalize(typeInfo.title) : "Animale",
    desc:
      typeInfo?.desc ||
      "Afla mai multe despre cum animalele ne influenteaza existenta si cum pot prevesti viitorul",
  };

  return (
    <Suspense fallback={<div className="no-data">Se încarcă...</div>}>
      <Gallery pageDesc={pageDesc} itemData={items} />
    </Suspense>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}