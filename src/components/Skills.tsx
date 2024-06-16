import React from "react";

import s from "@/layouts/skills.module.scss";
import title from "@/layouts/titleview.module.scss";

import {
    SiAndroid,
    SiArduino,
    SiCss3,
    SiDart,
    SiFlutter,
    SiHtml5,
    SiJavascript,
    SiKotlin,
    SiLinux,
    SiMysql,
    SiNextdotjs,
    SiPhp,
    SiPlatformio,
    SiPython,
    SiRaspberrypi,
    SiReact,
    SiRust,
    SiSass,
    SiTypescript,
    SiAutodesk,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Skills() {
    return (
        <div className={s.skill}>
            <div className={title.titleBox}>
                <p className={title.title}>Skills</p>
            </div>
            <div className={s.skills}>
                <div className={s.icons}>
                    <SiHtml5 className={s.icon} />
                    <SiCss3 className={s.icon} />
                    {/* <SiPhp className={s.icon} /> */}
                    <SiJavascript className={s.icon} />
                    <SiTypescript className={s.icon} />
                    <SiSass className={s.icon} />
                    <SiNextdotjs className={s.icon} />
                    <SiReact className={s.icon} />

                    <SiFlutter className={s.icon} />
                    <SiDart className={s.icon} />
                    <SiAndroid className={s.icon} />
                    {/* <SiKotlin className={s.icon} /> */}

                    {/* <FaJava className={s.icon} /> */}
                    <SiPython className={s.icon} />
                    {/* <SiRust className={s.icon} /> */}

                    <SiRaspberrypi className={s.icon} />
                    <SiArduino className={s.icon} />
                    <SiAutodesk className={s.icon} />
                    <SiPlatformio className={s.icon} />

                    {/* <SiLinux className={s.icon} /> */}
                    <SiMysql className={s.icon} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
