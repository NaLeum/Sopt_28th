const sleep = n => new Promise(resolve => setTimeout(resolve, n));


// { id, title, body }

const posts = [
    {
        id:1,
        title: '리덕스 미들웨어를 배워볼게요',
        body: '리덕스 미들웨어를 직접 만들어보면 이해하기가 쉽죠'
    },
    {
        id:2,
        title: '개 하기싫네',
        body: 'redux-thunk'
    },
    {
        id:3,
        title: '진짜로',
        body: '배우기'
    }

];

export const getPosts = async () => {
    await sleep(500);
    return posts;
}

export const getPostById = async id => {
    await sleep(500);
    return posts.find(post => post.id === id)
} 