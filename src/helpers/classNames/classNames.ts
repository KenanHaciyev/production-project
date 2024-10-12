type Mods = Record<string, string | boolean>


const classNames = (cls: string, mods: Mods, additional: string[]) => {
    return [cls,
        ...additional,
        ...Object().entries(mods).filter(([key, value]: {key: string, value: string | boolean}[]) => Boolean(value)).map(([key]: [string]) => key)].join(' ')
}