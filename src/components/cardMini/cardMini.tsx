'use client';

import { JSX } from 'react';
import styles from './cardMini.module.css';
import cn from 'classnames';
import Image from 'next/image';
import { dataCardMini } from '@/src/utils/dataCardMini';
import CardInfo from './cardMiniInfo/cardMiniInfo';
import { DataCardMiniProps } from '@/src/interface/dataCardMiniProps';
import Like from '../like/like';
import axios from 'axios';

export default function CardMini(): JSX.Element {
    const card: DataCardMiniProps = dataCardMini?.card;

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

    return (card &&
        <div className={cn(styles.card)}>
            <div className={cn(styles.card__image_wrap)}>
                <Image
                    className={cn(styles.card__image)}
                    src={card.image}
                    width={300}
                    height={192}
                    alt='Card'
                />
            </div>
            <CardInfo data={card} />
            <Like onClick={changeLikes} />
        </div>
    );
}
