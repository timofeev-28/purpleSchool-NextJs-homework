import { JSX } from 'react';
import styles from './cardMiniInfo.module.css';
import DateAndLikes from './dateAndLikes/dateAndLikes';
import { HTag } from '../../ui/hTag/HTag';
import { P } from '../../ui/p/P';
import Link from 'next/link';
import { CardMiniInfoProps } from './cardMiniInfo.props';

export default function CardMiniInfo({ data }: CardMiniInfoProps): JSX.Element {
    const href = data?.link ?? '';

    return (
        <div className={styles.info}>
            <DateAndLikes date={data?.date_public} likes={data?.count_likes} />
            <HTag tag='h3'>{data?.title}</HTag>
            <P size='s'>{data?.description}</P>
            <div className={styles.info__time_wrap}>
                <span className={styles.info__time}>{data?.reading_time}</span>
                <Link className={styles.info__link} href={href}>Читать</Link>
            </div>
        </div>
    );
}
