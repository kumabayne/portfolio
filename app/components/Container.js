import { classNames } from "../utilities/utils";

function Container({ children, className }) {
    return (
        <div
            className={classNames("container mx-auto px-4 md:px-6", className)}
        >
            {children}
        </div>
    );
}

export default Container;
