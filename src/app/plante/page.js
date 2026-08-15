import Gallery from "../gallery/page";
import { plantData } from "../mockData";

export default function PlantPage() {
    const pageDesc = {
        title:"Plante",
        desc:"Invata despre plante si cum ele sustin intreaba viata din univers"
    }
  return (
    <Gallery
      pageDesc={pageDesc}
      itemData={plantData} 
      linkHref="/plante" 
    />
  );
}