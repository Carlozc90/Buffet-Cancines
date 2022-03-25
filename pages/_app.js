import { BuffetProvider } from "../context/BuffetProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <BuffetProvider>
      <Component {...pageProps} />
    </BuffetProvider>
  );
}

export default MyApp;
