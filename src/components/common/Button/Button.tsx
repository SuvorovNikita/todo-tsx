import React from "react";
import styles from "./style.module.css";
import cn from "classnames";

type PropsType = {
    text: string
    type?: "default" | "danger" | "success" | "info"
}

const Button = (props: PropsType) => {
    const css = cn({
        [styles.button]: true,
        [styles.danger]: props.type === "danger",
        [styles.info]: props.type === "info",
        [styles.success]: props.type === "success"
    });
    return <input type="button" className={css} value={props.text}/>
};

export default Button;
