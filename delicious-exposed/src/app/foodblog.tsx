"use client";
import styles from './foodblog.module.css';
import { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { client } from './sanity-client';

const FoodBlog = () => {
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
    body: any;
  }

  const [posts, setPosts] = useState<Post[]>([]);

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

  return (
    <div className={styles.main}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <h2 className={styles.title}>{post.title}</h2>
          {post.mainImage && (
            <img src={post.mainImage.asset.url} alt={post.title} />
          )}
          <p>Published on: {new Date(post.publishedAt).toLocaleDateString()}</p>
          <div className={styles.content}>
          <PortableText value={post.body} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodBlog;
