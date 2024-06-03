// Interface
interface IProfileComponent {
    className?: string,
}

// Styles
import "./profile-component.scss";

export function ProfileComponent(props: IProfileComponent) {

    const { className } = props;

    return (
        <div className={`profile-component ${className}`}> 
            <span
                className={`profile-component__user ${className}`}>
                КК
            </span>
        </div>
    );
};