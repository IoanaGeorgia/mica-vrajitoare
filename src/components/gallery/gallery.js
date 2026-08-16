'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; 
import styles from "./gallery.module.css";
import Link from "next/link";

export default function Gallery({ itemData = [], pageDesc }) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("search") || ""; 

  const [searchTerm, setSearchTerm] = useState(initialCategory);
  const [debouncedSearch, setDebouncedSearch] = useState(initialCategory);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const queryFromUrl = searchParams.get("search") || "";
    setSearchTerm(queryFromUrl);
    setDebouncedSearch(queryFromUrl);
  }, [searchParams]);

  useEffect(() => {
    if (searchTerm !== debouncedSearch) {
      setIsLoading(true);
    }

    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredItems = itemData.filter((item) => {
    if (!debouncedSearch.trim()) return true;

    const normalizedQuery = debouncedSearch.toLowerCase().trim();

    const matchesTitle = item.title?.toLowerCase().includes(normalizedQuery);
    const matchesCategory = item.categories?.some((category) =>
      category.toLowerCase().includes(normalizedQuery)
    );

    return matchesTitle || matchesCategory;
  });

  return (
    <div className={`${styles.itemPage} page`}>
      <div className="page-header">
        <h2 className="subtitle">{pageDesc?.title}</h2>
        <p>{pageDesc?.desc}</p>
        <div className="symbol">🕮</div>
      </div>

      {itemData.length ? (
        <div className="cards-wrapper">
          <div className="search-wrapper card">
            <input
              type="text"
              placeholder="Cautare..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {isLoading && <div className="search-spinner" aria-label="Se incarca..."></div>}
          </div>

          {isLoading ? (
            <div className="loader-container">
              <div className="spinner"></div>
            </div>
          ) : filteredItems.length > 0 ? (
            <div className="cards-container">
              {filteredItems.map((item) => (
                <div className="card item-card column" key={item.scientific_title}>
                  <div className="card-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                    />
                  </div>
                  <Link href={`/${item.type}/${item.site_slug}`} className="card-title">
                    {item.title}
                  </Link>
                  <div className="tags">
                    {item.categories?.slice(0,3).map((tag, index) => (
                      <Link 
                        href={`/cautare?search=${encodeURIComponent(tag)}`} 
                        className="link-default" 
                        key={index}
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-data">Niciun rezultat gasit pentru "{debouncedSearch}"</div>
          )}
        </div>
      ) : (
        <div className="no-data">Nu am gasit niciun rezultat</div>
      )}
    </div>
  );
}