
import Routers from './routes/Routers';
import styled from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools'
import GlobalStyle from "./styles/GlobalStyle"
const Container = styled.main`
  position: relative;
`;
function App() {
  return (
  <Container>
    <GlobalStyle />
    <Routers />
    <ReactQueryDevtools initialIsOpen={true}/>
  </Container>
  );
}

export default App;
