"use client";

import { useEffect, useState } from "react";

import s from "@/layouts/works.module.scss";
import title from "@/layouts/titleview.module.scss";
import WorkCard from "@/components/WorkCard";
import { client } from "@/libs/client";

function Works() {
    // 絞り込み機能
    const [selectedItem, setSelectedItem] = useState("All");
    const handleItemClick = (item: any) => {
        console.log("selected", item);
        setSelectedItem(item);
    };
    // 過去作品一覧
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await client.get({
                endpoint: "works",
                queries: { limit: 100 },
            });
            setData(res.contents);
        }
        fetchData();
    }, []);

    return (
        <div className={s.works}>
            <div className={s.head}>
                <div className={s.titleBox}>
                    <div className={title.titleBox}>
                        <p className={title.title}>Works</p>
                    </div>
                </div>
                <div className={s.titleArea}>
                    <div className={s.items}>
                        <p className={s.title}>過去作品</p>
                        <ul>
                            <li
                                onClick={() => handleItemClick("All")}
                                className={
                                    selectedItem === "All" ? s.selected : ""
                                }
                            >
                                すべて
                            </li>
                            <li
                                onClick={() => handleItemClick("Web")}
                                className={
                                    selectedItem === "Web" ? s.selected : ""
                                }
                            >
                                Web
                            </li>
                            <li
                                onClick={() => handleItemClick("App")}
                                className={
                                    selectedItem === "App" ? s.selected : ""
                                }
                            >
                                アプリ
                            </li>
                            <li
                                onClick={() => handleItemClick("IoT")}
                                className={
                                    selectedItem === "IoT" ? s.selected : ""
                                }
                            >
                                IoT
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.body}>
                {data.map(
                    (item: any, index: number) =>
                        (selectedItem === "All" ||
                            selectedItem == item.category[0]) && (
                            <WorkCard
                                key={index}
                                work_id={item.work_id}
                                category={item.category[0]}
                                name={item.title}
                                images={item.images}
                                text={item.text}
                                detail={item.detail}
                                dev_start={item.dev_start}
                                dev_end={item.dev_end}
                            />
                        )
                )}
            </div>
        </div>
    );
}

export default Works;
