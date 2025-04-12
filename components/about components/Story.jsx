import Link from "next/link";
import styles from "@/app/about.module.css";

export default function Story() {
    return(
        <>
            <div className={styles.about}>
            <h2 className={styles.aboutsolarscriptlines}>About Solarscript</h2>
                <p>At Solarscript, we're more than just a service provider; we're your trusted partner in harnessing the power of the sun, 
                    and ensuring the safety and efficiency of your electrical systems. With a passion for 
                    innovation and a commitment to excellence, we bring a unique blend of expertise to meet your diverse needs.
                </p>
                <p><b>Solar Installation :</b><br />
                    As champions of renewable energy, we take pride in helping you make a sustainable choice for your energy needs. 
                    Our experienced team designs and installs cutting-edge solar solutions tailored to your specific requirements. 
                    We empower homes and businesses to reduce their carbon footprint while enjoying long-term energy savings.
                </p>
                <p><b>Electrical Engineering/System Design :</b><br />
                    Safety and reliability are paramount when it comes to electrical systems. Our skilled electricians are dedicated to ensuring 
                    your electrical infrastructure is robust, compliant, and efficient. From installations to maintenance and repairs, we've got 
                    your electrical needs covered.
                </p>


                <h2 className={styles.aboutsolarscriptlines}>Our Values</h2>
                <p><b>Quality:</b><br />
                    We never compromise on the quality of our work. Every project we undertake reflects our commitment to excellence.
                    Sustainability: We believe in a cleaner, greener future and actively promote environmentally responsible solutions.
                    Customer-Centric: Your satisfaction is our priority. We work closely with you to understand your unique goals and 
                    deliver tailored solutions.
                </p>

                <h2 className={styles.aboutsolarscriptlines}>Why Choose Us?</h2>
                <p><b>Innovation:</b> We stay at the forefront of industry advancements to offer you the latest and most efficient technologies.</p>
                <p><b>Expertise:</b> Our team brings years of experience and a wealth of knowledge to every project.</p>
                <p><b>Reliability:</b> You can count on us to meet deadlines and deliver on our promises.</p>
                <p><b>Custom Solutions:</b> We understand that every project is unique, and we approach each one with a fresh perspective.</p>
                <p><b>Affordability:</b> We offer competitive pricing without compromising on quality.</p>
                <br/>
                <br />
                <p>Whether you're looking to harness solar energy, or ensure your electrical systems are running smoothly, 
                    <Link href="/" className={styles.desi}>Solarscript</Link> is your comprehensive solution provider. Contact us today, 
                    and let's embark on a journey to a brighter, more efficient future together.
                </p>
            </div>
        </>
    )
}
