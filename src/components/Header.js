import {StyledHeader, Nav, Image, Logo} from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import appPic from "../pictures/appPic.png";
import logoPic from "../pictures/logo.png";


const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo>
                        <img src={logoPic} alt="logo"/>
                        <h1>Huddle</h1>
                    </Logo>
                    <Button bg="#32CCFE">Try It Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>Hubble re-imegines the way we build communities. You have a voice,
                            but so does your audience. 
                            Create connections with your users as you engage in genuine discussion.
                        </p>
                        <Button bg="#CC2846" color="#fff">
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src={appPic}/>
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header;