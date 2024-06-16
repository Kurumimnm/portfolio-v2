import { useEffect, useState } from "react";
import Image from "next/image";

import { IoMdClose } from "react-icons/io";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

import s from "@/layouts/modal.module.scss";

type ImageType = {
    url: String;
    height: number;
    width: number;
};

export const Modal = ({
    isOpen,
    onClose,
    // children,
    title_name,
    images,
    detail,
    dev_start,
    dev_end,
}: {
    isOpen: boolean;
    onClose: () => void;
    // children: React.ReactNode;
    title_name: string;
    images: ImageType[];
    detail: String;
    dev_start: String;
    dev_end: String;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
                setCurrentIndex(0);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!isOpen) return null;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : images.length - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
    };
    return (
        <>
            <div
                className={s.modalBackdrop}
                onClick={() => {
                    onClose();
                    setCurrentIndex(0);
                }}
            >
                <div
                    className={s.modalContent}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className={s.modalHeader}>
                        <h2 className={s.titleName}>{title_name}</h2>
                        <IoMdClose
                            className={s.closeButton}
                            onClick={() => {
                                onClose();
                                setCurrentIndex(0);
                            }}
                        />
                    </div>
                    <div className={s.modalBody}>
                        <div className={s.leftContent}>
                            <div className={s.slider}>
                                <div className={s.arrow}>
                                    <FaCaretLeft
                                        className={s.arrowLeft}
                                        onClick={handlePrev}
                                    />
                                    <FaCaretRight
                                        className={s.arrowRight}
                                        onClick={handleNext}
                                    />
                                </div>
                                <div className={s.imageContainer}>
                                    <Image
                                        src={`${images[currentIndex].url}`}
                                        alt={`Image ${currentIndex + 1}`}
                                        width={images[currentIndex].width}
                                        height={images[currentIndex].height}
                                        className={s.image}
                                    />
                                </div>
                                <div className={s.indicator}>
                                    {images.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`${s.indicatorDot} ${
                                                currentIndex === index
                                                    ? s.active
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setCurrentIndex(index)
                                            }
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <div className={s.developBox}>
                                <p className={s.developPeriod}>
                                    {dev_start}～{dev_end}
                                </p>
                            </div>
                        </div>
                        <div className={s.rightContent}>
                            <p className={s.detail}>{detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
