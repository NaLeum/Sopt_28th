import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/PostList";
import { getPosts } from "../modules/posts";

const PostListContainer = () => {
    const {data,loading,error} = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch]);

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러발생!</div>
    if(!data) return null

    return(
        <PostList posts={data} />
    )
}

export default PostListContainer;