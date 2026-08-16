'use client'

import { useParams, notFound } from "next/navigation";
import GalleryItem from "../../../components/galleryItem/galleryItem";
import { animalData } from "../../mockData";

export default function animalPage() {
  const params = useParams();
  const slug = params?.site_slug || params?.slug;

  if (!slug) return null;
  const currentAnimal = animalData.find((p) => p.site_slug === slug);
  if (!currentAnimal) {
    notFound();
  }

  return <GalleryItem item={currentAnimal} />;
}