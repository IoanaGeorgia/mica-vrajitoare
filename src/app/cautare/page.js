'use client'
import Gallery from "../gallery/page";
import { plantData, animalData } from "../mockData";
import { useEffect, useState } from "react";
let allItems = [...plantData, ...animalData]

export default function CautarePage() {

  const pageDesc = {
    title: "Cautare",
    desc: "Am cautat pe tot site-ul."
  }


  return (
    <Gallery
      pageDesc={pageDesc}
      itemData={allItems}
    />
  );
}