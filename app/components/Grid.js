import { classNames } from "../utilities/utils";

function Grid({ children, className }) {
    return (
        <div
            className={classNames(
                "gap-2 grid grid-cols-12 md:gap-6",
                className
            )}
        >
            {children}
        </div>
    );
}

export default Grid;
