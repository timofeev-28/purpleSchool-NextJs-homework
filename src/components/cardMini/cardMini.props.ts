import { DataCardMiniProps } from '@/src/interface/dataCardMiniProps';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardMiniProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    src: string;
    data: DataCardMiniProps;
}
