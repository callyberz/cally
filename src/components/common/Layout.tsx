// import Footer from "./footer";

import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <main className="m-0 p-4">{children}</main>
    </div>
  );
}
