import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [featching, setFeatching] = useState(false);

  useEffect(() => {
      setFeatching(true);

      const controller = new AbortController();
      const signal = controller.signal;

       fetch("https://dummyjson.com/posts", {signal})
         .then((res) => res.json())
         .then((data) => {
          addInitialPosts(data.posts); //
          setFeatching(false);
         })
         return () => {
           controller.abort()
         }
  }, []);

return (
  <>
    {featching && <LoadingSpinner />}
    {!featching && postList.length === 0 && <WelcomeMessage />}
    {!featching && postList.map((post) => <Post key={post.id} post={post} />)}
  </>
);
};

export default PostList;