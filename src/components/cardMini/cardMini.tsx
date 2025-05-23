'use client';

import { JSX } from 'react';
import styles from './cardMini.module.css';
import Image from 'next/image';
import CardMiniInfo from './cardMiniInfo/cardMiniInfo';
import { PostItem } from '@/src/interface/postItem';

export default function CardMini({ data }: {data: PostItem}): JSX.Element {
    return (
        <div className={styles.card}>
            <div className={styles.card__image_wrap}>
                <Image
                    className={styles.card__image}
                    src={'/safari.jpg'}
                    width={300}
                    height={192}
                    alt='Card'
                />
            </div>
            <CardMiniInfo data={data} />
        </div>
    );
}
