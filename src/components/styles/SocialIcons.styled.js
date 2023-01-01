import styled from "styled-components";

export const StyledSocialIcons = styled.div`
    display; flex;
    text-align: center;
    justify-content; center;

    ul {
    display: flex;
    justify-content: space-around;
    }


    li {
        list-style-type: none;
    }

    a {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        margin-right: 0px;
        padding: 10px 10px;
        text-decoration; none;
        text-align: center;
    }
`;