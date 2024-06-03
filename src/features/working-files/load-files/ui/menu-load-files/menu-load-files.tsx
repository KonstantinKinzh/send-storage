// Components
// import { OptionLoadFiles } from "../option-load-files";

// Types
type TFor = {
    for?: string,
};

type TInputAttributes = {
    webkitdirectory?: string,
};

const TWtebkitdirectory: TInputAttributes = {
    webkitdirectory: "",
}

// Icons
import ArrowUpIcon from "@/shared/icons/icons-btn-action-files/arrow-up-icon.png"
import FolderIcon from "@/shared/icons/icons-btn-action-files/folder-icon.png"

// Styles
import "./menu-load-files.scss";

export function MenuLoadFiles() {
    return (
        <>
            <div className="menu-load-files">
                <div className="menu-load-files__wrapper">
                    <input
                        id="files"
                        className="menu-load-files__input"
                        type="file"
                        multiple
                    />
                    <label
                        for="files"
                        className="menu-load-files__content"
                        {...({ for: "files" } as TFor)}>
                        <img
                            className="menu-load-files__img"
                            src={ArrowUpIcon}
                            alt="Иконка загрузки файлов" />
                        <p
                            className="menu-load-files__title">
                            Файл
                        </p>
                    </label>

                    <input

                        id="folder"
                        className="menu-load-files__input"
                        type="file"
                        webkitdirectory
                        {...TWtebkitdirectory}
                    />

                    <label
                        for="folder"
                        className="menu-load-files__content"
                        {...({ for: "folder" } as TFor)}
                    >
                        <img
                            className="menu-load-files__img"
                            src={FolderIcon}
                            alt="Иконка загрузки папки" />
                        <p
                            className="menu-load-files__title">
                            Папка
                        </p>
                    </label>

                </div>
            </div>
        </>
    );


};


