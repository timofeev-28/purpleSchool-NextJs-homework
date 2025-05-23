'use client';

import { JSX } from 'react';
import styles from './post.module.css';
import cn from 'classnames';
import { PostItem } from '@/src/interface/postItem';
import DateAndLikes from '../cardMini/cardMiniInfo/dateAndLikes/dateAndLikes';
import Image from 'next/image';
import Like from '../like/like';
import { changeLikes } from '@/src/utils/changeLikes';

export default function Post({ data }: {data: PostItem}): JSX.Element {
    return (
        <div className={cn('container', styles.post)}>
            <h1>{data?.title}</h1>
            <DateAndLikes />
            <Image
                className={styles.post__image}
                src={'/safari.jpg'}
                width={687}
                height={440}
                alt='Card'
                />
            <p>{data?.body}</p>
            <Like onClick={changeLikes} />
        </div>
    );
}
