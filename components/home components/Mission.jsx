import styles from "@/app/home.module.css";

export default function Mission() {
    return (
        <>
            <div className={styles.intro}></div>
            <div className={styles.missionbox}>
                <h2 style={{display: "inline-block; margin-right: 10px;"}} className={styles.aboutsolarscriptlines}>Mission</h2><i class="fas fa-bullseye fa-2x"></i>
                <p>Empowering a Sustainable future: Our mission is to seemlessly integrate renewable energy solutions through
                expert solar installation, innovative electrical wiring, and cutting-edge website development. We are
                committed to harnessing the power of technology and eco-friendly practices to create a brighter, greener,
                and more connected world for generations to come.
                </p>
            </div>
            <div className={styles.missionbox}>
                <h2 style={{display: "inline-block; margin-right: 10px;"}} className={styles.aboutsolarscriptlines}>Vision</h2><i class="fas fa-binoculars fa-2x"></i>
                <p>Together, we aspire to lead the charge towards a greener planet, a more connected society and a prosperous
                    future. With innovation at our core, we are driven to make sustainable living and digital empowerment
                    accessible to all, today and for generations to come.
                </p>
            </div>
        </>
    )
}