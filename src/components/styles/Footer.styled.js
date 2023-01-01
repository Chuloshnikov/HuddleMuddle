import styled from "styled-components";

export const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.footer};
color: #fff;
padding: 100px 0 60px;

ul {
    list-style-type: none;
}

ul li {
    margin-buttom: 20px;
    text-align: center;
}

p {
    text-align: right;
}

@media(max-width:${({theme}) => theme.mobile}) {
    text-align: center;
}

ul {
    padding: 0;
}

p {
    text-align: center;
}

`;

export const FooterLogo = styled.div`
display: flex;
text-align: center;
align-items: center;



& > img {
    width 38px;
    height:38px;
}

& > h1 {
    font-size: 22px;
    color: #32CCFE;
}

@media (max-width:${({theme}) => theme.mobile}) {
    justify-content: center;
})
`