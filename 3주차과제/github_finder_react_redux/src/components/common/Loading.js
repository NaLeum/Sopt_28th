import styled from 'styled-components';

const LoadingWrap = styled.div`
        border-radius: 100%;
        height: 100px;
        position: relative;
        width: 100px;
        margin: 40px auto;
        &:hover > div {
            border-color: transparent #E45635 transparent #E45635;
            transition: all 0.5s ease-in-out;

        }
`

const Loaddiv = styled.div`
        height: 100px;
        position: relative;
        width: 100px;
        border-radius: 100%;
        border: 2px solid transparent;
        border-color: transparent #fff transparent #FFF;
        animation: rotate-loading 1.5s linear 0s infinite normal;
        transform-origin: 50% 50%;
        transition: all 0.5s ease-in-out;

`
const LoadingText = styled.div`
            animation: loading-text-opacity 2s linear 0s infinite normal;
            color: #ffffff;
            font-family: "Helvetica Neue, "Helvetica", ""arial";
            font-size: 10px;
            font-weight: bold;
            margin-top: 45px;
            opacity: 0;
            position: absolute;
            text-align: center;
            text-transform: uppercase;
            top: 0;
            width: 100px;
`
;
        


const Loading = () => {

    return(
        <LoadingWrap>
            <Loaddiv></Loaddiv>
            <LoadingText>loading</LoadingText>
        </LoadingWrap>
    )

}

export default Loading;