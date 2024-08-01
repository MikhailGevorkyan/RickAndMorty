import { useState, type FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      {open ? <div>fdfdf</div> : children}
      <Footer />
    </>
  );
};

export default Layout;
