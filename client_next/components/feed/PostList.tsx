import PostCard from "./Postcard";

type PostListProps = {
    posts: any[];
};

export default function PostList({ posts }: PostListProps) {
    return (
        <div className="flex flex-col gap-7 md:gap-5">
            {posts
                .filter(post => post && post._id)
                .map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
        </div>
    );
}
