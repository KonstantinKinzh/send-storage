// Components
import { BtnArrange } from "@/shared/ui/btn-arrange";

// Icons
import WatchIcon from "@/shared/icons/arrange-panel-icons/watch.png";

// Styles
import  "./show-latest.scss";

export function ShowLatest() {
    return (
        <div className="show-latest">
            <BtnArrange 
            icon={WatchIcon} 
            title="Последние" 
            alt="Иконка кнопки показать последние"/>
        </div>
    );
};