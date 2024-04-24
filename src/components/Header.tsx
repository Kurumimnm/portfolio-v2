import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import style from "@/layouts/header.module.scss";

export default function Header() {
    return (
        <div className={style.header}>
            <div className={style.headerBox}>
                <h1 className={style.nameTitle}>Motosugi Takahiro</h1>
                <GiHamburgerMenu className={style.hamburgerMenu} />
            </div>
        </div>
    );
}
