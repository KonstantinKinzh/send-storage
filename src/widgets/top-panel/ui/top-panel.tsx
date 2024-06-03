// Components
import { Search } from "@/features/search/ui/search";
import { Profile } from "@/features/profile";

import { ViewApp } from "@/features/top-panel-btns/ui/view-app";

// Не за быть удалить
import { BtnShowMenu } from "@/shared/ui/btn-show-menu";

// Icons
import ViewAppIcon from "@/shared/icons/icon-view-app.png";
import QuestionIcon from "@/shared/icons/question.png";
import BellIcon from "@/shared/icons/bell-icon.png";

// Styles
import "./top-panel.scss";

export function TopPanel() {
  return (
    <div className="top-panel">
      <div className="top-panel__wrapper">
        <Search />

        <div className="options-users">
          <ViewApp />
          <BtnShowMenu
            className="w-[15px] h-[15px] p-[5px]"
            icon={QuestionIcon}
            alt="Иконка знака вопроса"
          />
          <BtnShowMenu
            className="w-[15px] h-[15px] p-[5px]"
            icon={BellIcon}
            alt="Иконка колокольчика"
          />

          <Profile />
        </div>
      </div>
    </div>
  );
};