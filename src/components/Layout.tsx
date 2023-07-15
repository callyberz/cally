// import Footer from "./footer";

import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="p-4">
      <Header />
      <main className="flex gap-x-4">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
