'use client'
import Gallery from "../../components/gallery/gallery";
import { plantData, animalData } from "../mockData";
import { Suspense } from "react";
let allItems = [...plantData, ...animalData]

export default function CautarePage() {

  const pageDesc = {
    title: "Cautare",
    desc: "Am cautat pe tot site-ul."
  }


  return (
    <Suspense fallback={<div className="no-data">Se încarca...</div>}>
    <Gallery
      pageDesc={pageDesc}
      itemData={allItems}
    />
    </Suspense>
  );
}