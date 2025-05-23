import { DataCardMiniProps } from '@/src/interface/dataCardMiniProps';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardMiniInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: DataCardMiniProps;
}
