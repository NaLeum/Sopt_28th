import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: #24272b;
    border-radius: 10px;
    border: none;
    color: #b6b7b8;
    font-family: inherit;
    font-size: 1rem;
    padding: 1rem;
    margin-bottom: 2rem;
    width: 320px;
    transition: 0.5s;
    &::placeholder {
        color: #b6b7b8;
    }
    &:focus {
        outline:none;
        box-shadow: 0px 0px 10px 10px #b6b7b8;
    }
`


const InputComponent = ({onHandleInputChange, onHandleFormSubmit,username}) => {

    return(
    <>
          <form onSubmit={onHandleFormSubmit}>
              <StyledInput onChange={onHandleInputChange} value={username} placeholder='Github 프로필을 검색해보세요' autoFocus/>
         </form>
    </>
    )
}

export default InputComponent;