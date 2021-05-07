import styled from 'styled-components';
import Loading from '../common/Loading';

const ResultWrap = styled.div`
    background-color: #2c3035;
    border-radius: 20px;
    box-shadow: rgba(23, 25, 29, 0.3) 0 2px 20px;
    display: flex;
    padding: 3rem;
    max-width: 800px;
    transition:0.5s;
    :hover {
        box-shadow: 0px 0px 10px 10px #b6b7b8;
    }
`
const ResultAvatar = styled.img`
    border: 10px solid #646568;
    border-radius: 50%;
    height: 180px;
    width: 180px;
`
const UserInfoWrap = styled.div`
    color: #e5e6e7;
    margin-left: 2rem;
    & > h2 {
        margin-top: 0;
        font-size:20px;
        margin-bottom:10px;
        font-weight:600;
    }
    & > p {
        margin-bottom:10px;
    }

`
const UserFollowWrap = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    max-width: 400px;
    margin-bottom:10px;
`
const UserFollowItem = styled.li`
    display: flex;
    align-items: center;
    margin-right: 1.5rem;

    & > strong {
        font-weight:600;
        margin-right: 0.5rem;
    }
`

const RepoButton = styled.a`
    background-color: #393c42;
    border-radius: 5px;
    display: inline-block;
    color: #a0a0a2;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
`;

const ResultComponent = ({userInfo,repoInfo,loading}) => {
    if(!loading){
        if(userInfo){
            return(
                <ResultWrap>
                    <div>
                      <ResultAvatar src={userInfo.avatar_url} alt={userInfo.name}/>
                    </div>
                    <UserInfoWrap>
                      <h2>{userInfo.name}</h2>
                      <p>{userInfo.bio}</p>
                      <UserFollowWrap>
                        <UserFollowItem><strong>Followers</strong>{userInfo.followers}</UserFollowItem>
                        <UserFollowItem><strong>Following</strong>{userInfo.following}</UserFollowItem>
                        <UserFollowItem><strong>Repos</strong>{userInfo.public_repos}</UserFollowItem>
                      </UserFollowWrap>
                      {repoInfo && repoInfo.slice(1,10).map((repo,index)=>{
                          return ( <RepoButton key = {index} href={repo.html_url}>{repo.name}</RepoButton>)
                      })}
                    </UserInfoWrap>
                  </ResultWrap>
                )        
        }else{
            return null
        }
    }else{
        return(
            <Loading />
        )
    }


}

export default ResultComponent;