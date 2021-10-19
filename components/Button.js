import styles from "./Button.module.css";
import classNames from "classnames";

const noop = () => undefined;

export default function Button({ href = null, theme = 'light', onClick = noop, className = null, text = "", customStyles = null }) {
    let component;

    const classes = classNames({
        [styles.button]: true,
        [styles.buttonLight]: theme === 'light',
        [styles.buttonDark]: theme === 'dark',
        [className]: className,
    });

    if (href) {
        component = <a href={href} onClick={onClick} className={styles.button} styles={customStyles}>{text}</a>;
    } else {
        component = <button onClick={onClick} className={classes} styles={customStyles}>{text}</button>;
    }

    return component;
}