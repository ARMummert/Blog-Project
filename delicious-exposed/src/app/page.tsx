"use client" 

import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "./navbar";
import { Footer } from "./footer";
import ContactForm from "./contact";

export default function Home() {
  return (
    <main id="home" className={styles.main}>
      <Navbar />
      <div className={styles.headerSection}>
      <section className={styles.top}>
      <div className={styles.headerText}>
          <h1 className={styles.line}>Delicious Exposed</h1>
          <div>
            <p className={styles.subline}>From Garden to Plate: Gardening Tips, Delicious Recipes, and Honest Takeout Reviews! </p>
          </div>
          <div className={styles.mainImg}>
          <Image className={styles.gardenImg} src="/images/garden.jpg" alt="Garden" width={200} height={200} />
          <Image className={styles.tomatoImg} src="/images/takeout.jpg" alt="Tomato" width={200} height={200} />
          <Image className={styles.cuttingboardImg} src="/images/cuttingboard.jpg" alt="Cutting Board" width={200} height={200} />
          <Image className={styles.brusselsImg} src="/images/brussels.jpg" alt="Brussel Sprouts" width={200} height={200} />
          </div>
      </div>
      </section>
      </div>
      <div className={styles.aboutSection}> 
      <section id="about" className={styles.about}>
        <h1 className={styles.aboutHeader}>About Erin</h1>
        <p className={styles.aboutText}>Erin is a registered nurse who finds it therapeutic to garden, cook healthy meals, and find delicious food options.</p>
        <p className={styles.aboutText}>Erin&apos;s partners are her husband of 40 years and her Cavalier King Charles Gigi who enjoys daily walks and taste testing samples allowed for dogs. She spends her free time with her husband, Gigi and her grandchildren. The beach is one of her favorite getaways.</p>  
        <div className={styles.aboutImg}>
        <Image className={styles.erinImg} src="/images/erin.jpeg" alt="Erin" width={250} height={380} />   
        <Image className={styles.gigiImg} src="/images/gigi.jpg" alt="Gigi" width={250} height={380} />
        </div>      
      </section>
      </div>
      <div className={styles.blogSection}>
      <section id="blog" className={styles.blog}>
        <h2 className={styles.blogHeader}>Blog</h2>
        <p className={styles.blogText}>Erin&apos;s blog will feature her gardening adventures, recipes, and take-out reviews. </p>
      </section>
      </div>
      <div className={styles.contactSection}>
      <section id="contact">
        <h2 className={styles.contactHeader}>Contact</h2>
        <ContactForm />
      </section>
      </div>
      <div className={styles.footerSection}>
      <Footer />
      </div>
    </main>
  );
}