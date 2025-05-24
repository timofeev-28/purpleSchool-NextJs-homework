import { PostItem } from '../interface/postItem';
import { API } from './api';

export default async function GetPost(id: string): Promise<PostItem | null> {
    try {
        const res = await fetch(API.posts + `/${id}`, {
            next: { revalidate: 5}
        });
        return res.json();
    } catch {
        return null;
    }
}
