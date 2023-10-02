export function classNames(defaultClassNames, propClassNames) {
    return propClassNames
        ? `${propClassNames} ${defaultClassNames}`
        : defaultClassNames;
}
