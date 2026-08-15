
'use client'
import Link from "next/link";
import styles from "./commons.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function Header() {

  const [isMobileOpen, openMobile] = useState(false);

  useEffect(() => {
    console.log("isMobileOpen changed to:", isMobileOpen);
    
    if (isMobileOpen) {
      console.log("The mobile menu was triggered to OPEN");
    }
  }, [isMobileOpen]);

  return (

    <div className={styles.header}>
      <div className={styles.wrapper}>

            <Link href="/" className="link-default logo">
              🕮
            </Link> 

        <div className={styles.linksWrapper}>

            <Link href="/about" className="link-default">
              Semn de carte
            </Link> 

            <Link href="/about" className="link-default">
              Despre
            </Link> 
        </div>

   
    <button onClick={() => openMobile(!isMobileOpen)} className={styles.mobileButton}>
      ☰
    </button>
    

    { isMobileOpen && <div className={styles.headerDrawer}
    >

    <button onClick={() => openMobile(!isMobileOpen)} className={styles.mobileButtonClose}>
      ✕
    </button>
    

<div className={styles.linksWrapperMenu}>
            <Link href="/" onClick={() => openMobile(false)}>
              Home
            </Link> 

            <Link href="/about" onClick={() => openMobile(false)}>
              About Us
            </Link> 
        </div>

    </div>}
       


      </div>
    </div>

  );
}
