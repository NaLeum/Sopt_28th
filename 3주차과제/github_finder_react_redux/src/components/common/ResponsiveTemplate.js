import styled from 'styled-components';

const StyledTemplate = styled.div`
    background-color: #1b1d21;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    width:auto;
    height:auto;
`

const ResponsiveTemplate = ({children}) => {

return <StyledTemplate>{children}</StyledTemplate>
}

export default ResponsiveTemplate;