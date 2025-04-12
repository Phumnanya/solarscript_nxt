import styles from "@/app/gallery.module.css";
export default function Grid2() {
    return(
        <>
        <div className={styles.gridcontainer}>
            <div className={`${styles.griditem} ${styles.item1}`}><a target="_blank" href="B1.jpg">
                <img src="B1.jpg" alt="project" /></a></div>
            <div className={`${styles.griditem} ${styles.item2}`}><a target="_blank" href="BC.jpg">
                <img src="BC.jpg" alt="project" style={{objectFit: "cover"}} /></a></div>
            <div className={`${styles.griditem} ${styles.item3}`}><a target="_blank" href="helmet.jpg">
                <img src="helmet.jpg" alt="project" /></a></div>
            <div className={`${styles.griditem} ${styles.item4}`}><a target="_blank" href="B3.jpg">
                <img src="B3.jpg" alt="project" /></a></div>
            <div className={`${styles.griditem} ${styles.item5}`}><a target="_blank" href="B4.jpg">
                <img src="B4.jpg" alt="project" /></a></div>
        </div>

        <div className={styles.quotes}>
            <div className={styles.quotesitem1}>"</div>
            <div className={styles.words}>
                <h5>The sun, that power plant in the sky bathes earth in ample energy to fulfil all the 
                    world's power needs many times over, it doesn't give off cabon dioxide emissions, it 
                    won't run out, and it's free.</h5><p>- Susannah Locke</p>
            </div>
            <div className={styles.quotesitem2}>"</div> 
        </div>
        </>
    )
}