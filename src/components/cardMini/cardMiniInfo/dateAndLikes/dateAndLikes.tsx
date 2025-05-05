import { JSX } from 'react';
import styles from './dateAndLikes.module.css';
import { DateAndLikesProps } from './dateAndLikes.props';
import { Likes } from '@/src/components/ui/likes/likes';

export default function DateAndLikes({ date, likes }: DateAndLikesProps): JSX.Element {
    return (
        <div className={styles.date}>
            <span className={styles.date__direction}>Front-end</span>
            <span className={styles.date__date}>
                <span className={styles.date__dot}>.</span>{'\u00A0'}{date}
            </span>
            <Likes>{likes}</Likes>
        </div>
    )
}
