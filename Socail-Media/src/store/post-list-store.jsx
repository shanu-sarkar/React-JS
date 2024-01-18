import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListRedsuer = (currentPostList, action) => {
    let newPostList = currentPostList;
  if (action.type === "DELETE_POST"){
    newPostList = currentPostList.filter(post => post.id !== action.payload.postId)
  }else if (action.type === "ADD_POST"){
    newPostList = [action.payload ,...currentPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListRedsuer,
    DEAFULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
      dispatchPostList({
        type: "ADD_POST",
        payload: {
          id: Date.now(),
          title: postTitle,
          body: postBody,
          reactions: reactions,
          userId: userId,
          tags: tags
        },
      });
  };

  const deletePost = (postId) => {
    dispatchPostList({
        type: 'DELETE_POST',
        payload: {
            postId
        }
    })
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEAFULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Ayodha",
    body: "Hi Friends, I am shanu",
    reactions: 2,
    userId: "user-22",
    tags: ["My Name", "Age", "DOB"],
  },
  {
    id: "2",
    title: "Currently I am in Ayodha",
    body: "We are arrived in Ayodha",
    reactions: 5,
    userId: "user-22",
    tags: ["Which", "Age", "DOB"],
  },
];

export default PostListProvider;
