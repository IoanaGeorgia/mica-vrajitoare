import Gallery from "../../components/gallery/gallery";
import { plantData } from "../mockData";
import { Suspense } from "react";

export default function PlantPage() {
  const pageDesc = {
    title: "Plante",
    desc: "Invata despre plante si cum ele sustin intreaba viata din univers"
  }
  return (
    <Suspense fallback={<div className="no-data">Se încarca...</div>}>

      <Gallery
        pageDesc={pageDesc}
        itemData={plantData}
        linkHref="/plante"
      />
    </Suspense>
  );
}