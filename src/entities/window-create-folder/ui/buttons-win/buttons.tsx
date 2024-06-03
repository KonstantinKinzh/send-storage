// Styles
import "./buttons.scss";

// Tailwind
const paddings = `
    px-[15px] 
    pb-[15px]
`;

export function Buttons() {
    return (
        <>
            <div className="buttons">
                <div className={`buttons__wrapper ${paddings}`}>
                    <button
                        className="buttons__cancel">
                        Отмена
                    </button>
                    <button
                        className="buttons__create">
                        Создать
                    </button>
                </div>
            </div>
        </>
    );
};