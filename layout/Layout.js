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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
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
            route === "/carta" && "w-10/12 h-screen overflow-y-scroll"
          }`}
        >
          {children}
        </main>
      </div>

      {modal && (
        <Modal isOpen={modal} ariaHideApp={false} style={customStyles}>
          <CompoModal padre={"nuestracarta"} />
        </Modal>
      )}

      {route === "/carta" ? "" : <Footer />}

      <ToastContainer />
    </>
  );
}
