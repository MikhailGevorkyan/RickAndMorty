import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
