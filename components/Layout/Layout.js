import Link from "next/link";
import Wrapper from "./Wrapper";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <Link href="/">
        <NavBar />
      </Link>
      <Main>{children}</Main>
      <Link href="https://antonizalupka.tk">
        <Footer>antonizalupka.tk</Footer>
      </Link>
    </Wrapper>
  );
};

export default Layout;
