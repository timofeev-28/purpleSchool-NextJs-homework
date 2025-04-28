'use client';

import { JSX } from 'react';
import styles from './cardMini.module.css';
import Image from 'next/image';
import Like from '../like/like';
import axios from 'axios';
import CardMiniInfo from './cardMiniInfo/cardMiniInfo';
import { CardMiniProps } from './cardMini.props';

export default function CardMini({ src, data}: CardMiniProps): JSX.Element {

    const changeLikes = async () => {
        try {
            const { data } = await axios.patch(`https://jsonplaceholder.typicode.com/posts/1`, {
                likes: 1
            });
            console.log(data)
        } catch(e) {
            console.error(e);
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.card__image_wrap}>
                <Image
                    className={styles.card__image}
                    src={src}
                    width={300}
                    height={192}
                    alt='Card'
                />
            </div>
            <CardMiniInfo data={data} />
            <Like onClick={changeLikes} />
        </div>
    );
}
