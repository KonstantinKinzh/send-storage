import { useState } from "react";

export const useToggleWin = () => {
    const [isActive, setIsActive] = useState(false);

    function onShowWin() {
        setIsActive(prev => !prev);
    };

    function onClickExternalArea(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target as HTMLElement;
        if (target.className === "transparent-background") {
            setIsActive(prev => !prev);
        };
    };

    return { isActive, onShowWin, onClickExternalArea };
};