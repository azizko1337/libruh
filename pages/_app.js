import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
import theme from "../styles/theme";
import useStudent from "../utils/frontend/auth/useStudent";
import AuthContext from "../utils/frontend/auth/AuthContext";

const App = (props) => {
  const { Component, pageProps } = props;
  const student = useStudent();
  console.log(student);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <AuthContext.Provider value={student}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
