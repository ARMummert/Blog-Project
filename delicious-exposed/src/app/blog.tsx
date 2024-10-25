// pages/blog.js

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/posts');
  const data = await res.json();
  const posts = data.data; // Adjust according to Strapi's response structure

  return {
    props: { posts },
    revalidate: 10, // Revalidate every 10 seconds for ISR
  };
}

interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
  };
}

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.content}</p>
        </article>
      ))}
    </div>
  );
}
