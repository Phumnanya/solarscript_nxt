import styles from "@/app/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
    return (
        <>
            <div className={styles.line}></div>

<div className={styles.lines}><h1>Our Services <FontAwesomeIcon icon={faTools} className={styles.toolsicon} /> :</h1></div>

<div className={styles.services}>
    <div className={styles.servicesbox}>
        <img src="./services image.jpeg" alt="solar panels, with inverter and batteries" />
    </div>
    <div className={styles.servicesbox}>
        <div className={styles.writeups}>
            <h3>Solar & Inverter installation</h3>
        <p>We deliver top-notch solar systems installation that not only harness the power of the sun but also
            provide reliable and long-lasting energy solutions.
        </p>
        </div>
    </div>
</div>
<div className={styles.services}>
    <div className={styles.servicesbox}>
        <img src="./wiring01.jpg" alt="electrical power distribution box" />
    </div>
    <div className={styles.servicesbox}>
        <div className={styles.writeups}>
            <h3>Electrical Engineering/System Design</h3>
        <p>Get quality electrical design and wiring for your homes, offices,businesses and schools 
            from our professional Engineers, with clean and tidy works tailored to your satisfaction.</p>
        </div>
    </div>
</div>
<div className={styles.services}>
    <div className={styles.servicesbox}>
        <img src="./AC1.jpg" alt="Air conditioner" />
    </div>
    <div className={styles.servicesbox}>
        <div className={styles.writeups}>
            <h3>Air Conditioner installation</h3>
        <p>Installation of Air conditioner for your homes, schools, offices, and business places for your comfort.</p>
        </div>
    </div>
</div>
        </>
    )
}