import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post"
import { getPost } from "../modules/posts";


const PostContainer = ({postId}) => {
    const {data,loading,error} = useSelector(state => state.posts.post);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPost(postId));
    },[postId,dispatch])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러발생!</div>
    if(!data) return null

    return(<Post post={data}/>)
}

export default PostContainer;