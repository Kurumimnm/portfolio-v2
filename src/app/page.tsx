import Header from "@/components/Header";
import MainView from "@/components/MainView";
import History from "@/components/History";
import AboutMe from "@/components/AboutMe";

import styles from "./page.module.scss";

export default function Home() {
    return (
        <>
            <div className={styles.top}>
                <Header />
                <MainView />
            </div>
            <div className={styles.body}>
                <History />
                <AboutMe />
                <div style={{ height: "1000px" }}></div>
            </div>
        </>
    );
}
