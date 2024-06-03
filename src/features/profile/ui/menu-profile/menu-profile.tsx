// Components
import { OptionProfile } from "../option-menu-profile";
import { ProfileComponent } from "@/shared/ui/profile-component";

// Styles
import "./menu-profile.scss";

export function MenuViewApp() {
    return (
        <>
            <div className="menu-profile">
                <div className="menu-profile__wrapper">

                    <div className="menu-profile__header">
                        {/* Оборачиваем компонент, для модификации его размеров */}
                        <div className="menu-profile__profile-component">
                            <ProfileComponent />
                        </div>
                        <div className="menu-profile__content">
                            <p className="menu-profile__name-user">Константин Кинжитаев</p>
                            <p className="menu-profile__email">savlevich@bk.ru</p>
                        </div>
                    </div>

                    <OptionProfile
                        link="/"
                        title="Настройки"
                    />
                    <OptionProfile
                        link="/"
                        title="Управление"
                    />
                    <OptionProfile
                        link="/"
                        title="Авторизация"
                    />
                    <OptionProfile
                        link="/"
                        title="Установить программу на ПК"
                    />
                    <OptionProfile
                        link="/"
                        title="Тема"
                    />
                    <OptionProfile
                        link="/"
                        title="Выйти"
                    />
                </div>
            </div>
        </>
    );
};