import React from "react";

import style from "@/layouts/history.module.scss";
import title from "@/layouts/titleview.module.scss";

function History() {
    return (
        <div className={style.history}>
            <div className={title.titleBox}>
                <p className={title.title}>history</p>
            </div>
            <div className={style.period}>
                <ul>
                    <li>2003年</li>
                    <li>2022年</li>
                    <li>2023年</li>
                </ul>
            </div>
            <div className={style.event}>
                <ul>
                    <li>大阪生まれ</li>
                    <li>ECCコンピュータ専門学校入学</li>
                    <li>IoT部に入部</li>
                </ul>
            </div>
        </div>
    );
}

export default History;
