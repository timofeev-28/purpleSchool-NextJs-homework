import { JSX } from 'react';
import cn from 'classnames';
import styles from './cardsBlog.module.css';
import CardMini from '../cardMini/cardMini';
import { dataCardsMini } from '@/src/utils/dataCardsMini';
import { DataCardMiniProps } from '@/src/interface/dataCardMiniProps';
import { P } from '../ui/p/P';

export default function CardsBlog(): JSX.Element {
    const cards: DataCardMiniProps[] = dataCardsMini?.cards;

    return (
        <div className={cn('container', styles.cards_blog)}>
            {cards.length > 0 ?
                cards?.map((card) => (
                    <CardMini key={card?.id} src={card?.src} data={card} />
                ))
                :
                <P>Здесь пока ничего нет...</P>
            }
        </div>
    );
}
