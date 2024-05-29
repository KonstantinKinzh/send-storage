// Components
import { BtnActionFiles } from "@/shared/ui/btn-action-files";

// Icons 
import ArrowDownIcon from "@/shared/icons/icons-btn-action-files/arrow-down.png";

// Styles
import "./load-files.scss";

export function LoadFiles() {
    return (
        <div className="load-files">
            <BtnActionFiles
                icon={ArrowDownIcon}
                alt="Иконка кнопки сзагруить файлы (имеет вид струлки вверх)"
                title="Загрузить"
            />
        </div>
    );
};