import { PostItem } from '../interface/postItem';
import { API } from './api';

export default async function GetPosts(): Promise<PostItem[] | null> {
    try {
        const res = await fetch(API.posts);
        return res.json();
    } catch {
        return null;
    }
}
