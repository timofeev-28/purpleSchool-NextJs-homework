import { JSX } from 'react';
import { CardMiniProps } from './cardMiniInfo.props';
import styles from './cardMiniInfo.module.css';
import cn from 'classnames';
import DateAndLikes from './dateAndLikes/dateAndLikes';
import { HTag } from '../../HTag/HTag';
import { P } from '../../P/P';
import Link from 'next/link';

export default function CardInfo({ data }: CardMiniProps): JSX.Element {
    return (
        <div className={cn(styles.info)}>
            <DateAndLikes date={data?.date_public} likes={data?.count_likes} />
            <HTag tag='h3'>{data?.title}</HTag>
            <P size='s'>{data?.description}</P>
            <div className={cn(styles.info__time_wrap)}>
                <span className={cn(styles.info__time)}>{data?.reading_time}</span>
                <Link className={cn(styles.info__link)} href={data?.link}>Читать</Link>
            </div>
        </div>
    );
}
