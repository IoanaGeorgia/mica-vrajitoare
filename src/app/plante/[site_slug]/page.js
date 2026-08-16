'use client'

import { useParams, notFound } from "next/navigation";
import GalleryItem from "../../../components/galleryItem/galleryItem";
import { plantData } from "../../mockData";

export default function PlantPage() {
  const params = useParams();
  const slug = params?.site_slug || params?.slug;

  if (!slug) return null;
  const currentPlant = plantData.find((p) => p.site_slug === slug);
  if (!currentPlant) {
    notFound();
  }

  return <GalleryItem item={currentPlant} />;
}