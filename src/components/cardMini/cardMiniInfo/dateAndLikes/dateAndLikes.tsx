import { JSX } from 'react';
import styles from './dateAndLikes.module.css';
import cn from 'classnames';
import { DateAndLikesProps } from './dateAndLikes.props';
import { ButtonLike } from '@/src/components/ButtonLike/ButtonLike';

export default function DateAndLikes({ date, likes }: DateAndLikesProps): JSX.Element {
    return (
        <div className={cn(styles.date)}>
            <span className={cn(styles.date__direction)}>Front-end</span>
            <span className={cn(styles.date__date)}>
                <span className={cn(styles.date__dot)}>.</span>{'\u00A0'}{date}
            </span>
            <ButtonLike>{likes}</ButtonLike>
        </div>
    )
}
