// Styles
import "./buttons-win.scss";

// Tailwind
const paddings = `
    px-[15px] 
    pb-[15px]
`;

export function ButtonsWin() {
    return (
        <div className="buttons-win">
            <div className={`buttons-win__wrapper ${paddings}`}>
                <button
                    className="buttons-win__cancel">
                    Отмена
                </button>
                <button
                    className="buttons-win__create">
                    Создать
                </button>
            </div>
        </div>

    );
};