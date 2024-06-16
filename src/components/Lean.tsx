import React from "react";

import s from "@/layouts/skills.module.scss";
import title from "@/layouts/titleview.module.scss";

import { SiLinux, SiRust } from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Lean() {
    return (
        <div className={s.skill}>
            <div className={title.titleBox}>
                <p className={title.title}>Study</p>
            </div>
            <div className={s.skills}>
                <div className={s.icons}>
                    <FaJava className={s.icon} />
                    <SiRust className={s.icon} />
                    <SiLinux className={s.icon} />
                </div>
            </div>
        </div>
    );
}

export default Lean;
