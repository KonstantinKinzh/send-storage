// Components

// Styles
import "./input-win.scss";

// Tailwind
const paddings = `
    pl-[15px] 
    pr-[15px]
`;

export function InputWin() {
    return (
        <div className="input-win">
            <div className={`input-win__wrapper ${paddings}`}>
                <p className="input-win__title">Название</p>
                <input
                    className="input-win__input"
                    type="text"
                    placeholder="Название папки"
                />
            </div>
        </div>
    );
};