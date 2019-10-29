import React from "react";
import Post from "../../components/post";

const PostCore = ({ location, data }) => {
    const { blogPost, previous, next } = data;

    return <Post data={{ ...data, post: blogPost }} location={location} previous={previous} next={next} />;
};

export default PostCore;
