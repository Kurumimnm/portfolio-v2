import React from "react";

import style from "@/layouts/mainview.module.scss";

export default function MainView() {
    return (
        <div className={style.mainView}>
            <div className={style.backgroundBox}>
                <div className={style.square}></div>
            </div>
            <p className={style.nameEn}>Takahiro Motosugi</p>
            <p className={style.nameJp}>本杉 昂大</p>
        </div>
    );
}
