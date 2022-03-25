import Head from "next/head";
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

      <div className="flex">
        <aside className="w-1/5">
          <Sidebar />
        </aside>

        <main>
          <div className="p-10">{children}</div>
        </main>
      </div>
    </>
  );
}
