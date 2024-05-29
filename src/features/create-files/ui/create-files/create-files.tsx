// Components
import { BtnActionFiles } from "@/shared/ui/btn-action-files";

// Icon
import PlusIcon from "@/shared/icons/icons-btn-action-files/plus.png";

// Styles
import "./create-files.scss";

export function CreateFiles() {
    return (
        <div className="create-files">
            <BtnActionFiles
                icon={PlusIcon}
                alt="Иконка кнопки создать файл (имеет вид крестика)"
                title="Создать"
            />
        </div>
    );
};