import Link from "next/link";
import styles from "@/app/gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <>
            <footer>
                <img src="./white logo.png" alt="solarscript logo" />
                <h3>Pages</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" style={{backgroundColor: 'limegreen'}}><Link href="/" className="">Home</Link></li>
                    <li className="list-group-item" style={{backgroundColor: 'limegreen'}}><Link href="/about" className="">About</Link></li>
                    <li className="list-group-item" style={{backgroundColor: 'limegreen'}}><Link href="/contact" className="">Contact Us</Link></li>
                    <li className="list-group-item" style={{backgroundColor: 'limegreen'}}><Link href="/gallery" className="">Gallery</Link></li>
                </ul>
                <br /> 
                <h3>Newsletter <FontAwesomeIcon icon={faEnvelope} /></h3>
                <p>Sign up for our weekly newsletter and free tips below</p>
                <input type="email" placeholder="enter email address" />
                <button type="button" class="btn btn-md btn-warning ms-2">Sign up</button>
                <br />
                <h5 className={styles.copyright}>&copy; Solarscript Technologies 2023</h5>
            </footer>
        </>
    )
}

