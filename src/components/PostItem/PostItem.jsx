import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/PostService";
import st from "./PostItem.module.css";

const PostItem = () => {
    let { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        getPost(id, setPost);
    }, [id]);

    return (
        <article className={st.wrapper}>
            <img
                src={post.coverImageUrl}
                alt="coverImage"
                className={st.image}
            />
            <h1 className={st.title}>{post.title}</h1>
            <p className={st.content}>{post.content}</p>
            <p>{post.creationDate}</p>
        </article>
    );
};

export default PostItem;
