import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY= 'primary',
    SECONDARY= 'secondary',
    RED= 'red',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme
    otherProps?: Record<string, string | boolean>;
}

export const AppLink: FC<AppLinkProps> = ({
    to, className, children, theme = AppLinkTheme.PRIMARY, otherProps,
}: AppLinkProps) => (
    <Link
        to={to}
        className={classNames(
            cls.AppLink,
            { theme },
            [className, cls[theme]],
        )}
        {...otherProps}
    >
        {children}
    </Link>
);
