// Components
import { InputTypeFile } from "../input-type-file/input-type-file";

// Types
type TFor = {
    for?: string,
};


// Interface
interface IOptionLoadFiles {
    idFor: string,
    icon?: string,
    alt?: string,
    title: string,
};

// Styles
import "./option-load-files.scss";

export function OptionLoadFiles(props: IOptionLoadFiles) {
    const { idFor, icon, alt, title } = props;
    return (

        <div className="option-load-files">
            <div className="option-load-files__wrapper">


                <InputTypeFile id={idFor} />
                <label
                    for={idFor}
                    className="option-load-files__content"
                    {...({ for: `${idFor}` } as TFor)}>
                    <img
                        className="option-load-files__img"
                        src={icon}
                        alt={alt} />
                    <p
                        className="option-load-files__title">
                        {title}
                    </p>
                </label>


            </div>
        </div>

    );
};