import React, { useState } from "react";
import Image from "next/image";

import s from "@/layouts/workcard.module.scss";
import { Modal } from "@/components/Modal";

type ImageType = {
    url: String;
    height: number;
    width: number;
};

type Props = {
    work_id: number;
    category: String;
    name: String;
    images: ImageType[];
    text: String;
    detail: String;
    dev_start: String;
    dev_end: String;
};
function WorkCard({
    work_id,
    category,
    name,
    images,
    text,
    detail,
    dev_start,
    dev_end,
}: Props) {
    var image_link = String(images[0].url);

    // console.log("画像", images);
    // console.log("imageLink", image_link);

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                }}
                title_name={`${name}`}
                images={images}
                detail={`${detail}`}
                dev_start={`${dev_start}`}
                dev_end={`${dev_end}`}
            ></Modal>
            <div className={s.workCard}>
                <div className={`${s.category} ${s[`color${category}`]}`}>
                    <p>{category}</p>
                </div>
                <div className={s.card}>
                    <p className={s.workTitle}>{name}</p>
                    <div className={s.workImage}>
                        <Image
                            src={image_link}
                            alt="work_title_image"
                            className={s.image}
                            width={1920}
                            height={1080}
                            onClick={() => {
                                setIsModalOpen(true);
                            }}
                        />
                    </div>
                    <div className={s.explanation}>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkCard;
