import s from "@/layouts/works.module.scss";
import title from "@/layouts/titleview.module.scss";
import WorkCard from "./WorkCard";

function Works() {
    return (
        <div className={s.works}>
            <div className={s.head}>
                <div className={s.titleBox}>
                    <div className={title.titleBox}>
                        <p className={title.title}>works</p>
                    </div>
                </div>
                <div className={s.titleArea}>
                    <div className={s.items}>
                        <p className={s.title}>過去作品</p>
                        <ul>
                            <li>すべて</li>
                            <li>Web</li>
                            <li>アプリ</li>
                            <li>IoT</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.body}>
                <WorkCard />
                <WorkCard />
                <WorkCard />
                {/* <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard /> */}
            </div>
        </div>
    );
}

export default Works;
