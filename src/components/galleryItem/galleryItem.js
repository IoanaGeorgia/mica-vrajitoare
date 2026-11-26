'use client'
import styles from "./galleryComponent.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

function getName(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value.title || "";
}

function getImageSrc(image) {
  if (!image) return "/coada-randunicii.webp";
  if (image.startsWith("/") || image.startsWith("http")) {
    return image;
  }
  return `/${encodeURI(image)}`;
}

export default function GalleryItem({ item }) {
  const [isBookmark, setIsBookmark] = useState(false);

  if (!item) return null;

  useEffect(() => {
    let isBook = localStorage.getItem("bookMarkList");

    if (isBook && item?.site_slug) {
      let isBookList = JSON.parse(isBook);
      const exists = isBookList.includes(item.site_slug);
      setIsBookmark(exists);
    } else {
      setIsBookmark(false);
    }
  }, [item?.site_slug]);

  const bookmarkPage = () => {
    const saved = localStorage.getItem("bookMarkList");
    let isBookList = saved ? JSON.parse(saved) : [];
    const currentSlug = item.site_slug;

    const existingIndex = isBookList.findIndex((slug) => slug === currentSlug);
    if (existingIndex >= 0) {
      isBookList.splice(existingIndex, 1);
      setIsBookmark(false);
    } else {
      isBookList.push(currentSlug);
      setIsBookmark(true);
    }
    localStorage.setItem("bookMarkList", JSON.stringify(isBookList));
  };

  const typeLabel = getName(item.type);
  const imgSrc = getImageSrc(item.image);
  const categoryNames = item.categories?.map(getName).filter(Boolean) || [];

  return (
    <main className={`${styles.itemPage} page item-page`}>
      <title>{item.title}</title>
      <meta name="description" content={JSON.stringify(categoryNames)} />
      <div className="page-header">
        <h2 className="subtitle">{item.title}</h2>
        <p>{typeLabel}</p>
      </div>

      <div className="bookmark-wrapper">
        <button
          title="Bookmark this page"
          onClick={() => bookmarkPage()}
          aria-label="Bookmark this page"
        >
          {isBookmark ? "⛊" : "⛉"}
        </button>
      </div>

      <div className="content">
        <div className="card item-card card-image">
          <img
            src={imgSrc}
            alt={item.title}
            width={400}
            height={300}
          />
        </div>

        <div
          className="textContent"
          dangerouslySetInnerHTML={{ __html: item.text }}
        />

        <div className="tags">
          {categoryNames.map((tag, index) => (
            <Link
              href={`/cautare?search=${encodeURIComponent(tag)}`}
              className="btn-default"
              key={item.categories?.[index]?._id || index}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}