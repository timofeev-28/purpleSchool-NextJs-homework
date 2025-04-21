import { JSX } from 'react';
import styles from './ButtonLike.module.css';
import cn from 'classnames';
import { ButtonLikeProps } from './ButtonLikeProps';

export const ButtonLike = ({ children, ...props }: ButtonLikeProps): JSX.Element => {
    return (
        <button
            className={cn(styles.likes_button)}
            {...props}
        >
            {children}
        </button>
    );
};
