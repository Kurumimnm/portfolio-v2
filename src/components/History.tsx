"use client";

import style from "@/layouts/history.module.scss";
import title from "@/layouts/titleview.module.scss";

import { useEffect, useState } from "react";
import { client } from "@/libs/client";

function History() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await client.get({
                endpoint: "history",
                queries: { limit: 100, orders: "createdAt" },
            });
            setData(res.contents);
        }
        fetchData();
    }, []);

    return (
        <div className={style.history}>
            <div className={style.titleBox}>
                <div className={title.titleBox}>
                    <p className={title.title}>History</p>
                </div>
            </div>
            <div className={style.eventBox}>
                <ul>
                    {data.map((item: any) => {
                        return (
                            <li key={item.id}>
                                {item.year ? (
                                    item.year
                                ) : (
                                    <>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;
                                    </>
                                )}
                                {item.month.length <= 2 ? (
                                    <>&nbsp;&nbsp;&emsp;</>
                                ) : (
                                    <>&emsp;</>
                                )}
                                {item.month}
                                &emsp;
                                {item.event}
                                {item.award && (
                                    <>
                                        「
                                        <span className={style.award}>
                                            {item.award}
                                        </span>
                                        」
                                    </>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default History;
