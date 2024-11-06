"use client";
import styles from './blog.module.css';
import { useEffect, useState } from 'react';
import { PortableText, PortableTextBlock } from '@portabletext/react';
import { client } from './sanity-client';

// Blog Component
const Blog = () => {
  interface Post {
    _id: string;
    title: string;
    mainImage?: {
      asset: {
        _id: string;
        url: string;
      };
    };
    publishedAt: string;
    body: PortableTextBlock[];
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          _id,
          title,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          publishedAt,
          body
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  const handlePostSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPostId(event.target.value || null); 
  };

  const handleBackClick = () => {
    setSelectedPostId(null); 
  };

  return (
    <div className={styles.main}>
      <select onChange={handlePostSelect} className={styles.dropdown}>
        <option value="">Choose a Post</option>
        {posts.map((post) => (
          <option key={post._id} value={post._id}>
            {post.title}
          </option>
        ))}
      </select>
       {selectedPostId && (
        <button onClick={handleBackClick} className={styles.backButton}>
          ← Back to all posts
        </button>
      )}
      <div className={styles.postsContainer}>
        {posts
          .filter((post) => !selectedPostId || post._id === selectedPostId)
          .map((post) => (
            <div className={styles.post} key={post._id}>
              <h2 className={styles.title}>{post.title}</h2>
              <p>Published on: {new Date(post.publishedAt).toLocaleDateString()}</p>
              <div className={styles.content}>
                <PortableText value={post.body}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
