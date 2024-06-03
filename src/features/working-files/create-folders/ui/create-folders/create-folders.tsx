// Custom hooks
import { useToggleWin } from "../../lib/useToggleWin";

// Components
import { BtnActionFiles } from "@/shared/ui/btn-action-files";
import { WindowCreateFolder } from "@/entities/window-create-folder/ui";
import { TranspBack } from "@/shared/ui/transp-back";

import CreateFolderIcon from "@/shared/icons/icons-btn-action-files/create-folder.png";

// Styles
import "./create-folders.scss";

export function CreateFolders() {
    const { isActive, onClickExternalArea, onShowWin } = useToggleWin();
    return (
        <div className="create-folders" onClick={onClickExternalArea}>
            <div className="create-folders__wrapper">
                <BtnActionFiles
                    onHandleClick={onShowWin}
                    icon={CreateFolderIcon}
                    alt="Иконка кнопки создать папку"
                    title="Создать папку"
                />
                {isActive && <WindowCreateFolder onShowWin={onShowWin} />}
            </div>
            {isActive && <TranspBack/>}
        </div>
    );
};