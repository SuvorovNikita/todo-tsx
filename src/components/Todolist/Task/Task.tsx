import styles from "../Task/style.module.css";
import React from "react";
import cn from "classnames";

type PropsType = {
    title: string,
    isDone: boolean
}

export function Task(props: PropsType) {

    const css = cn ({
        [styles.done]: props.isDone === true,
    });

    return <div className={styles.list}>
        <div className={css}>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
        </div>
    </div>
}

export default Task;
