import React from "react";

import s from "@/layouts/workcard.module.scss";

function WorkCard() {
    return (
        <div className={s.workCard}>
            <div className={s.category}>
                <p>Web</p>
            </div>
            <div className={s.card}>
                <p className={s.workTitle}>作品タイトル</p>
                <div className={s.workImage}></div>
                <div className={s.explanation}>
                    <p>ここに作品の説明を記入</p>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;
