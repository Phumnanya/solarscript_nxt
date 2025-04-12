import styles from "@/app/gallery.module.css";
export default function Grid3() {
    return(
        <>
        <div className={styles.gridcontainer}>
            <div className={`${styles.griditem} ${styles.item1}`}><a target="_blank" href="C1.jpg">
                <img src="C1.jpg" alt="project" /></a></div>
            <div className={`${styles.griditem} ${styles.item2}`}><a target="_blank" href="IMG-20241027-WA0042.jpg">
                <img src="IMG-20241027-WA0042.jpg" alt="project" style={{backgroundColor: "white"}} /></a></div>
            <div className={`${styles.griditem} ${styles.item3}`}><a target="_blank" href="roof.jpg">
                <img src="roof.jpg" alt="project" /></a></div>
            <div className={`${styles.griditem} ${styles.item4}`}><a target="_blank" href="Image_1742278151274.jpg">
                <img src="Image_1742278151274.jpg" alt="project" /></a></div>
            <div className={`${styles.griditem} ${styles.item5}`}><a target="_blank" href="C4.jpg">
                <img src="C4.jpg" alt="project" /></a></div>
        </div>

        <div className={styles.quotes}>
            <div className={styles.quotesitem1}>"</div>
            <div className={styles.words}>
                <h5>As the technology for solar cells gets better and better, this form of clean 
                    renewable energy will find more applications that take up less space and 
                    produce more electricity, to meet the energy needs of our homes schools 
                    and businesses.</h5><p>- Samuel Bodman</p>
            </div>
            <div className={styles.quotesitem2}>"</div> 
        </div>
        </>
    )
}