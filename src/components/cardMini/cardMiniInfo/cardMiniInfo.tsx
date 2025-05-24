import { JSX } from 'react';
import styles from './cardMiniInfo.module.css';
import DateAndLikes from '@/src/components/cardMini/cardMiniInfo/dateAndLikes/dateAndLikes';
import { HTag } from '@/src/components/ui/hTag/HTag';
import { P } from '@/src/components/ui/p/P';
import Link from 'next/link';
import { PostItem } from '@/src/interface/postItem';

export default function CardMiniInfo({ data }: {data: PostItem}): JSX.Element {
    
    return (
        <div className={styles.info}>
            <DateAndLikes />
            <HTag tag='h3'>{data?.title}</HTag>
            <P size='s'>{data?.body}</P>
            <div className={styles.info__time_wrap}>
                <span className={styles.info__time}>{'3 минуты'}</span>
                <Link className={styles.info__link} href={`/post/${data?.id}`}>Читать</Link>
            </div>
        </div>
    );
}
