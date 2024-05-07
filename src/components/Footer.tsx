import React from "react";

import s from "@/layouts/footer.module.scss";

import { SiGithub, SiGmail, SiX } from "react-icons/si";

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.links}>
                <div className={s.icons}>
                    <a
                        href="https://twitter.com/ECCcompIE_Moto"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiX className={s.icon} />
                    </a>
                    <a
                        href="https://github.com/Kurumimnm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGithub className={s.icon} />
                    </a>
                    <SiGmail className={s.icon} />
                </div>
            </div>
            <div className={s.mail}>
                <p>t.motosugi2003@gmail.com</p>
            </div>
        </div>
    );
}

export default Footer;
