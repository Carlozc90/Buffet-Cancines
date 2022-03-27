import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useRouter } from "next/router";

export default function Layout({ children, pagina }) {
  const router = useRouter();
  const { route } = router;
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
        {route === "/carta" && (
          <aside className="w-1/5">
            <Sidebar />
          </aside>
        )}

        <main
          className={`h-screen ${
            route === "/carta" && "w-3/4 h-screen overflow-y-scroll"
          }`}
        >
          {children}
        </main>
      </div>

      {route === "/carta" ? "" : <Footer />}
    </>
  );
}
