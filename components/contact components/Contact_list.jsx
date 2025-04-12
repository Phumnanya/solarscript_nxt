import styles from "@/app/contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function ContactList() {
    return(
        <>
            <div className={styles.info}>
            <h2>Contact Info</h2>
            <p>Feel free to contact us for enquiries about our services and other related tips</p><br/>
            <FontAwesomeIcon icon={faMobile} size="4x" className={styles.faw} />
            <h3>Call</h3>
            <p className={styles.Display}>07083327410</p>-<p className={styles.Display}>08166046876</p>
            <br></br>
            <FontAwesomeIcon icon={faEnvelope} size="4x" className={styles.faw} />
            <h3>Email Address</h3>
            <p className={styles.Display}>info@solarscript.com.ng</p>
            <br></br>
            <FontAwesomeIcon icon={faWhatsapp} size="4x" className={styles.faw} />
            <h3>Whatsapp</h3>
            <p className={styles.Display}><a href="https://wa.me/2347083327410">07083327410</a></p>-<p className={styles.Display}><a href="https://wa.me/2348166046876">08166046876</a></p>
            <br></br>
        </div>
        </>
    )
}
