import Head from "next/head";
import Modal from "react-modal";

import { useRouter } from "next/router";
import useBuffet from "../hooks/useBuffet";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CompoModal from "../components/CompoModal";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children, pagina }) {
  const { modal } = useBuffet();
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
          className={`${
            route === "/carta" && "w-3/4 h-screen overflow-y-scroll"
          }`}
        >
          {children}
        </main>
      </div>

      {modal && (
        <Modal isOpen={modal} ariaHideApp={false}>
          <CompoModal padre={"nuestracarta"} />
        </Modal>
      )}

      {route === "/carta" ? "" : <Footer />}

      <ToastContainer />
    </>
  );
}
