import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {PostList} from "../store/post-list-store";

function Post({post}) {

const { deletePost} = useContext(PostList)

  return (
    <div className="card post-card">
      <img
        src="https://random.imagecdn.app/200/150"
        className="card-img-top"
        alt="Loading"
      />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {/* <a herf="#" className="btn btn-primary">
          Go somewhere
        </a> */}
        {post.tags.map((tag) => (
          <span key={tag} class="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div className="alert alert-danger reactions" role="alert">
          This Post has been reacted by #{post.reactions} people
        </div>
      </div>
    </div>
  );
}

export default Post;


