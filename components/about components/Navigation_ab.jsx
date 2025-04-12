'use client'
import { useState } from "react";
import Link from "next/link";
import styles from "@/app/about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {

    const [visible, invisible] = useState(false);

    const handleMouseOver = () => invisible(true);
    const handleMouseOut = () => invisible(false);

    return(
    <>
        <div className={styles.tpbox}>
        <div className={styles.navbar}>
            <div className={styles.navcontents}><img src="white logo.png" alt="solarscript id" /></div>
            <div className={styles.navcontents}>
            <button type="button" id="dropdown" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <FontAwesomeIcon icon={faBars} size="2x" />
                <div id="popup" style={{display: visible ? "block" : "none"}}>
                    <nav>
                        <Link href="/" className={styles.dropdownlinks}>Home</Link>
                        <Link href="/about" className={styles.dropdownlinks}>About</Link>
                        <Link href="/contact" className={styles.dropdownlinks}>Contact</Link>
                        <Link href="/gallery" className={styles.dropdownlinks}>Gallery</Link>
                    </nav>
                </div>
                </button>
            </div>
        </div>
    </div>
    </>
)
}