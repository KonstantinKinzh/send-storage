// Components
import { HeaderWin } from "./header-win";
import { InputWin } from "./input-win";
import { ButtonsWin } from "./buttons-win";

interface IWindowCreateFolder {
    onShowWin: MouseEventHandler<HTMLDivElement>
};

// Styles
import "./window-create-folder.scss";
import { MouseEventHandler } from "react";

export function WindowCreateFolder(props: IWindowCreateFolder) {
    const { onShowWin } = props;
    return (
        <div className="win-create-f">
            <HeaderWin onShowWin={onShowWin} />
            <InputWin />
            <ButtonsWin />
        </div>
    );
};