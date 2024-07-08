import Post from "./Post";
function Feed({ posts, del }) {
  return (
    <div className="feed">
      {posts.map((post, index) => (
        <Post
          key={index}
          name={post.user}
          con={post.content}
          id={post.id}
          del={del}
        />
      ))}
    </div>
  );
}

export default Feed;
