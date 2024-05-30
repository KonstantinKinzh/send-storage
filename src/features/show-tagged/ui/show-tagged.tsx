// Components
import { BtnArrange } from "@/shared/ui/btn-arrange";

// Icons
import StarIcon from "@/shared/icons/arrange-panel-icons/star.png";

// Styles
import "./show-tagged.scss";

export function ShowTagged() {
    return (
        <div className="show-tagged">
            <BtnArrange
                icon={StarIcon}
                title="Помеченные"
                alt="Иконка кнопки помеченные" />
        </div>
    );
};