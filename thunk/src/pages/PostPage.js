import PostContainer from "../containers/PostContainer";

const PostPage = ({match}) => {
    const {id} = match.params;
    const postId = parseInt(id, 10);
    return(<PostContainer postId={postId}/>)
}

export default PostPage;