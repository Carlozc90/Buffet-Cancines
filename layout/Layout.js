import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>BuffetService</title>
        <meta
          name="Buffet Proyecto Personal"
          content="Buffet Proyecto Personal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex">
        <aside className="w-1/5">
          <Sidebar />
        </aside>

        <main className="w-3/4 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>

      <Footer />
    </>
  );
}
