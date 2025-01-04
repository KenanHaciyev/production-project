import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<buttonProps> = ({ className, theme, ...otherProps }) => (
    <button
        type="button"
        className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
        {...otherProps}
    />
);
