// import Footer from "./footer";

import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-full min-h-full p-4">
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
