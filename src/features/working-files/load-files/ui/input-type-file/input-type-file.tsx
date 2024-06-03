

interface IInputTypeFile {
    id: string;
};

// Styles
import "./input-type-file.scss";

export function InputTypeFile(props: IInputTypeFile) {
    const { id } = props;
    if (id === "files") {
        return (
            <>
                <input
                    id={id}
                    className="option-load-files__input"
                    type="file"
                    multiple
                />
            </>
        );
    } else if(id === "folder") {
        return (
            <>
                <input
                    id={id}
                    className="option-load-files__input"
                    type="file"
                    webkitdirectory
                    {...({ TWebkitdirectory: "" } as TWebkitdirectory)} // Типизируем webkitdirectory
                />
            </>
        );
    }
};