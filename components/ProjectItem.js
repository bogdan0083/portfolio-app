import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./Button";
import styles from "./ProjectItem.module.css";

export default function ProjectItem({ name, caption, url, collaboration, pages, blurDataURL }) {
    const imgSrc = `/preview-images/${name}.jpg`;
    const router = useRouter();

    let button;
    if (pages) {
        const route = `/project/${name}`;
        button = <Button text="See Pages" theme='light' onClick={() => router.push(route)} />
    } else {
        button = <Button text="Visit Website" theme='light' href={url} />
    }

    return (
        <>
            <li className={styles.item}>
                <div className={styles.imageWrap}>
                    <Image width={900} height={900} src={imgSrc} blurDataURL={blurDataURL} />
                </div>
                <div className={styles.overlay}>
                    <div className={styles.overlayInner}>
                        <div className={styles.center}>
                            <div className={styles.caption}>
                                {Array.isArray(caption) && (
                                    caption.map(item => <div>{item}</div>)
                                )}
                                {!Array.isArray(caption) && caption}
                            </div>
                            <div className={styles.buttonWrap}>
                                {button}
                            </div>
                        </div>
                        {collaboration && (
                            <div className={styles.collaboration} dangerouslySetInnerHTML={{ __html: collaboration }} />
                        )}
                    </div>
                </div>
            </li>
        </>
    )
}