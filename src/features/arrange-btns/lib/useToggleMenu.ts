import { useState } from "react";

export const useToggleMenu = () => {
    const [isActive, setIsActive] = useState(false);

    function onShowMenu() {
        // const dataAtr = e.target.dataset;
        setIsActive(prev => !prev);
        // if(isActive === true && dataAtr === "dropdown-menu") {
        //     setIsActive(prev => !prev);
        // };
    };

    function onClickExternalArea(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target as HTMLElement;
        if (target.className === "transparent-background") {
            setIsActive(prev => !prev);
        };
    };

    return { isActive, onShowMenu, onClickExternalArea };
};