import LoupeIcon from "@/shared/icons/icon-loupe.png";
import "./search.scss";

export function Search() {
    return (
        <div className="search">
            <div className="search__wrapper">
                <img
                    src={LoupeIcon}
                    className="search__icon-loupe"
                    alt="Icons images"
                />
                <input
                    id="input-search"
                    className="search__input"
                    type="text"
                    placeholder="Поиск"
                />
            </div>
        </div>
    );
};