// Interface 
interface ITitle {
    title: string,
};

// Styles
import "./title.scss";

export function Title(props: ITitle) {
    const { title } = props;
    return (
        <div className="title">
            <h1 className="title__name">
                {title}
            </h1>
        </div>
    );
};