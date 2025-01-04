type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []) => [cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).filter(([key, value]) => Boolean(value)).map(([key, value]) => key)].join(' ');
