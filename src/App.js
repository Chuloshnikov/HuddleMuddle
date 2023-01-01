import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { theme } from './components/styles/theme';
import  { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global.styled';
import content from './components/content';




const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
      <Header/>
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item}/>
        ))}
      </Container>
      <Footer/>
    </>
    </ThemeProvider>
  );
}

export default App;
