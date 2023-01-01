import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import logoPic from "../pictures/logo.png";
import { StyledFooter, FooterLogo } from "./styles/Footer.styled";
import SocialIcons from "./SocialIcons";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterLogo>
                <img src={logoPic} alt="logo"/>
                <h1>Huddle</h1>
                </FooterLogo>
                <Flex>
                    <ul>
                        <li>
                        It is a long established fact that a reader will be distracted 
                        by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum 
                        </li>
                        <li>+ 1-375-345-5678 </li>
                        <li>example@huddle.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>

                    <SocialIcons/>
                </Flex>

                <p>&copy; 2022 Huddle All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}

export default Footer;