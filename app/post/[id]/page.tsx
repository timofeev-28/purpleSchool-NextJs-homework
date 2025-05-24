import Post from '@/src/components/post/post';
import GetPost from '@/src/utils/getPost';
import GetPosts from '@/src/utils/getPosts';
import { SUM_POSTS } from '@/src/helpers/sumPosts';

export async function generateStaticParams() {
    const posts = await GetPosts();
    if (!posts || posts?.length === 0) {
        return [];
    }
    return posts.slice(0, SUM_POSTS).map(post => ({ id: String(post.id)}));
}

type Params = Promise<{ id: string }>

export default async function PageProducts({ params }: { params: Params}) {
    const post = await GetPost((await params).id);

    if (!post) {
        return (
            <p>Произошла ошибка: Не удалось загрузить данные</p>
          );
    }

    return (
        <Post data={post} />
    ); 
}
