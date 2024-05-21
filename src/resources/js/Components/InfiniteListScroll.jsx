// resources/js/Pages/Posts/Index.jsx

import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

const InfiniteListScroll = () => {
    const { posts: initialPosts } = usePage().props;
    const [posts, setPosts] = useState(initialPosts.data);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(initialPosts.next_page_url !== null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            loadMore();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const loadMore = async () => {
        if (!hasMore) return;

        const nextPage = page + 1;
        Inertia.get(`/?page=${nextPage}`, {}, {
            preserveScroll: true,
            preserveState: true,
            replace: true,
            onSuccess: (page) => {
                const newPosts = page.props.posts.data;
                setPosts((prevPosts) => [...prevPosts, ...newPosts]);
                setPage(nextPage);
                setHasMore(page.props.posts.next_page_url !== null);
            },
        });
    };

    return (
        <div>
            {posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
            {hasMore && (
                <div className="loading">
                    <p>Cargando más posts...</p>
                </div>
            )}
        </div>
    );
};

export default InfiniteListScroll;
