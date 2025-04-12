import styles from "@/app/gallery.module.css";
export default function Grid1() {
    return(
        <>
        <div className={styles.explore}>
            <h1>Explore Our Solar Installations Gallery</h1>
        </div>

        <div className={styles.gridcontainer}>
            <div className={`${styles.griditem} ${styles.item1}`}><a target="_blank" href="sun.jpg">
                <img src="sun.jpg" alt="project" /></a></div>
            <div className={`${styles.griditem} ${styles.item2}`}><a target="_blank" href="white logo.png">
                <img src="white logo.png" alt="project" /></a></div>
            <div className={`${styles.griditem} ${styles.item3}`}><a target="_blank" href="frame3.jpg">
                <img src="frame3.jpg" alt="project" /></a></div>
            <div className={`${styles.griditem} ${styles.item4}`}><a target="_blank" href="frame4.jpg">
                <img src="frame4.jpg" alt="project" /></a></div>
            <div className={`${styles.griditem} ${styles.item5}`}><a target="_blank" href="frame5.jpg">
                <img src="frame5.jpg" alt="project" /></a></div>
        </div>

        <div className={styles.quotes}>
            <div className={styles.quotesitem1}>"</div>
            <div className={styles.words}>
                <h5>The use of solar energy offers huge potential for natural resource and 
                    climate protection, and for the expansion of renewable energies on the 
                    road to a future-oriented energy supply.</h5><p>- Margareta Wolf</p>
            </div>
            <div className={styles.quotesitem2}>"</div> 
        </div>
        </>
    )
}