import { JSX } from 'react';
import styles from './likes.module.css';
import cn from 'classnames';
import { LikesProps } from './likesProps';

export const Likes = ({ children, ...props }: LikesProps): JSX.Element => {
    return (
        <button
            className={cn(styles.likes_button)}
            {...props}
        >
            {children}
        </button>
    );
};
