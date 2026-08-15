import Gallery from "../gallery/page";
import { animalData } from "../mockData";

export default function AnimalePage() {
    const pageDesc = {
        title:"Animale",
        desc:"Afla mai multe despre um animalele ne influenteaza existenta si cum potr prevesti viitorul"
    }
  return (
    <Gallery
      pageDesc={pageDesc}
      itemData={animalData} 
      linkHref="/animale" 
    />
  );
}