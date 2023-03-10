import styled from 'styled-components';


const StyledCard = styled.div`
    display: flex;
    align-items: center;
    justify-content; center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({layout}) => layout || 'row'};

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
        
        img {
            width: 100%;    
        }
    }
`;

export default StyledCard;