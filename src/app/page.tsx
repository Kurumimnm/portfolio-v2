import Header from "@/components/Header";
import MainView from "@/components/MainView";

import styles from "./page.module.scss";

export default function Home() {
    return (
        <>
            <Header />
            <MainView />
            <div style={{ height: "1000px" }}></div>
        </>
    );
}
