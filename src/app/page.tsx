import Header from "@/components/Header";
import MainView from "@/components/MainView";
import History from "@/components/History";
import AboutMe from "@/components/AboutMe";
import Works from "@/components/Works";
import Skills from "@/components/Skills";

import styles from "./page.module.scss";
import Footer from "@/components/Footer";
import Lean from "@/components/Lean";
import { Modal } from "@/components/Modal";

export default function Home() {
    return (
        <>
            <div className={styles.top}>
                {/* <Header /> */}
                <MainView />
            </div>
            <div className={styles.body}>
                <History />
                <div className={styles.boxGap}></div>
                <AboutMe />
                <div className={styles.boxGap}></div>
                <Works />
                <div className={styles.boxGap}></div>
                <Skills />
                <div className={styles.boxGap}></div>
                <Lean />
                <div className={styles.boxGap}></div>
                <Footer />
                {/* <div style={{ height: "1000px" }}></div> */}
            </div>
        </>
    );
}
