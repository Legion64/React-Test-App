import {JSX, MouseEventHandler, ReactElement} from "react";
import classNames from "classnames";

type ButtonProp = {
    children: string | JSX.Element;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    append?: ReactElement;
    prepend?: ReactElement;
    className?: string;
}

function Button(props: ButtonProp) {
    return (
        <button onClick={props.onClick}
                className={classNames("border shadow px-3 py-1 rounded bg-white hover:bg-gray-50 flex items-center gap-1.5", props.className)}
        >
            {props.prepend ?? null} {props.children} {props.append ? <span className="h-5 w-5">{props.append}</span> : null}
        </button>
    );
}

export default Button;