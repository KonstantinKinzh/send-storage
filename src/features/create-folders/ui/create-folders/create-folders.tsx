// Components
import { BtnActionFiles } from "@/shared/ui/btn-action-files";

import CreateFolderIcon from "@/shared/icons/icons-btn-action-files/create-folder.png";

// Styles
import "./create-folders.scss";

export function CreateFolders() {
    return (
        <>
            <BtnActionFiles
                icon={CreateFolderIcon}
                alt="Иконка кнопки создать папку"
                title="Создать папку"
            />
        </>
    );
};