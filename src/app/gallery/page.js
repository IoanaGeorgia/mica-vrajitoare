'use client';

import styles from "./gallery.module.css";
import Link from "next/link";


import { useState } from 'react';
import { animalData } from "../mockData.js";

export default function Gallery({ itemData, pageDesc, linkHref }) {


    return (
        <div className={`${styles.itemPage} page`}>
            <div className="page-header">
                <h2 className="subtitle">{pageDesc.title}</h2>
                <p>{pageDesc.desc}                </p>
                <div className="symbol">🕮</div>
            </div>


            <div className="cards-wrapper">
                <div className="search-wrapper card">
                    <input type="text" placeholder="Cauta..." className="search-input" />
                </div>

                <div className="cards-container">

                    {itemData.map((item) => (
                        <div className="card item-card column" key={item.scientific_title}>
                            <div className="card-image">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={300}
                                />
                            </div>
                            <Link href={`${linkHref}/${item.site_slug}`} className="card-title">{item.title}</Link>
                            <div className="tags">
                                {item.categories.slice(0, 3).map((tag, index) => (
                                    <Link href="#" className="link-default" key={index}>{tag}</Link>
                                ))}

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
