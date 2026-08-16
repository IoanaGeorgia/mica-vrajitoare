'use client'
import { Suspense } from "react";
import Gallery from "../../components/gallery/gallery";
import { plantData, animalData } from "../mockData";
import { useEffect, useState } from "react";
let allItems = [...plantData, ...animalData]

export default function SemndeCartePage() {

  const pageDesc = {
    title: "Semne de carte",
    desc: "Ai salvate aici paginile pe care le-ai vizitat si care ti-au placut cel mai mult"
  }

  const [finalItems, setFinalItems] = useState([])

  useEffect(() => {

    const savedItems = JSON.parse(localStorage.getItem("bookMarkList")) ?? [];
    if (savedItems.length) {
      let finalItemsTemp = []
      for (let item of savedItems) {
        let savedItem = allItems.find((savedIt) => savedIt.site_slug === item)
        if (savedItem) {
          finalItemsTemp.push(savedItem)
        }
      }

      if (finalItemsTemp.length) {
        setFinalItems(finalItemsTemp)
      }
    }
    console.log(finalItems, 'final')
  }, [])

  return (
    <Suspense fallback={<div className="no-data">Se încarca...</div>}>
      <Gallery
        pageDesc={pageDesc}
        itemData={finalItems}
      />
    </Suspense>
  );
}