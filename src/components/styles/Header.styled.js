import styled from "styled-components";


export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 40px 0;

`;

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin-button: 40px;

@media(max-width:${({theme}) => theme.mobile}) {
    flex-direction: column;
}
`;

export const Logo = styled.div`
display: flex;
text-align: center;
align-items: center;

& > img {
    width 52px;
    height:52px;
}

& > h1 {
    color: #32CCFE;
}

@media (max-width:${({theme}) => theme.mobile}) {
    margin-buttom: 40px;
})
`;



export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        margin: 40px 0  30px;
    }
`;