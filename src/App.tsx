
import Routers from './routes/Routers';
import styled from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalStyle from './styles/GlobalStyle';
// 스타일드 컴포넌트
import { ThemeProvider } from 'styled-components';
import { lightTheme,darkTheme } from "./styles/theme";
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atom';
const Container = styled.main`
  position: relative;
`;
function App() {
  const isDark = useRecoilValue(isDarkAtom);
  // 리코일의 장ㅓ
  // const [isDark , setIsDark] = useState(false);
  // const toggleDark = () =>{
  //   // value 대신 function 을 보내서 스테이트 값을 변경해줌
  //   setIsDark(current => !current);
  // }
  return (
  <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
    <Container>
      <GlobalStyle/>
      <Routers />
      <ReactQueryDevtools initialIsOpen={true}/>
    </Container>
  </ThemeProvider>
  );
}

export default App;
