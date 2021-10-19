import classNames from "classnames";
import styles from "./Icon.module.css";

export default function Icon({ children, href, iconHeight = 50, iconWidth = 50, theme = 'white', className = null }) {

    const iconClass = classNames({
        [styles.icon]: true,
        [styles.iconWhite]: theme === 'white',
        [styles.iconDark]: theme === 'dark',
        [className]: className
    });

    return (
        <>
        {href && (
            <a href={href} className={iconClass} target="_blank">
                {children}
            </a>
        )}
        {!href && (
            <a href={href} className={iconClass} target="_blank">
                {children}
            </a>
        )}
        </>
    );
}
