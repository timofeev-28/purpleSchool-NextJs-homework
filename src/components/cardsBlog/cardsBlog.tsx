import { JSX } from 'react';
import cn from 'classnames';
import styles from './cardsBlog.module.css';
import CardMini from '../cardMini/cardMini';
import { P } from '../ui/p/P';
import GetPosts from '@/src/utils/getPosts';
import { SUM_POSTS } from '@/src/helpers/sumPosts';

export default async function CardsBlog(): Promise<JSX.Element> {
    const posts = await GetPosts();

    return (
        <div className={cn('container', styles.cards_blog)}>
            {!posts && <P>Не удалось загрузить данные...</P>}
            {posts && posts.length <= 0 && <P>Здесь пока ничего нет...</P>}

            {posts && posts.length > 0 &&
                posts?.slice(0, SUM_POSTS)?.map((post) => (
                    <CardMini key={post?.id} data={post} />
                ))}
        </div>
    );
}
