import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

function Post({ name, con, id, del }) {
  let [like, setlike] = useState(0);
  const handellike = () => {
    setlike(1 + like++);
  };
  console.log(like);
  return (
    <div className="post">
      <h2>{name}</h2>
      <p className="content">{con}</p>

      <div>
        <button className="like-b" onClick={handellike}>
          <AiFillLike />
        </button>
        <button className="delete-b" onClick={() => del(id)}>
          <MdOutlineDelete />
        </button>
        <button className="like-number "> {like} liked</button>
      </div>
    </div>
  );
}

export default Post;
