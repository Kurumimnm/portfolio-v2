import React from "react";

import s from "@/layouts/aboutme.module.scss";
import title from "@/layouts/titleview.module.scss";

function AboutMe() {
    return (
        <div className={s.profile}>
            <div className={s.profileArea}>
                <p>
                    Webアプリ、スマホアプリをメインで開発してます！
                    <br />
                    Flutterを主に使用しています。主にバックエンドを担当することが多いです。
                    <br />
                    まったりNext.jsを勉強しつつ部活動でIoT作品の制作に励んでいます。
                    <br />
                    3Dモデルなどの作成から制御処理などを担当しています。
                </p>
            </div>
            <div className={s.titleBox}>
                <div className={title.titleBox}>
                    <p className={title.title}>about me</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
