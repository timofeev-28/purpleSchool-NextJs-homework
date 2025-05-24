import { JSX } from 'react';
import cn from 'classnames';
import styles from './cardsBlog.module.css';
import CardMini from '@/src/components/cardMini/cardMini';
import { P } from '@/src/components/ui/p/P';
import GetPosts from '@/src/utils/getPosts';
import { SUM_POSTS } from '@/src/helpers/sumPosts';

export default async function CardsBlog(): Promise<JSX.Element> {
    const posts = await GetPosts();

    const isLoadingError = !posts;
    const isEmpty = posts && posts.length === 0;
    const isData = posts && posts.length > 0;

    return (
        <div className={cn('container', styles.cards_blog)}>
            {isLoadingError && <P>Не удалось загрузить данные...</P>}
            {isEmpty && <P>Здесь пока ничего нет...</P>}
            {isData &&
                posts?.slice(0, SUM_POSTS)?.map((post) => (
                    <CardMini key={post?.id} data={post} />
                ))}
        </div>
    );
}
