import Image from "next/image";
import { useRouter } from "next/router";
import { formatearDinero } from "../helpers";
import useBuffet from "../hooks/useBuffet";

const Header = () => {
  const router = useRouter();
  const { total } = useBuffet();

  return (
    <header className="w-full h-[100px] bg-gradient-to-r from-red-600 to-red-500">
      <button
        className={`ml-10 absolute  ${
          router.pathname === "/carta" ? "z-[0]" : "z-[1]"
        } `}
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          width={150}
          height={150}
          src={"/assets/img/img/logo.png"}
          alt="logo imagen"
        />
      </button>

      <nav className="md:pl-[300px] pl-[150px] h-full grid md:grid-cols-2">
        <div className="flex justify-center items-center  ">
          {[
            ["carta", "/carta"],
            ["promociones", "/"],
            ["contacto", "/"],
          ].map(([title, url]) => (
            <button
              type="button"
              key={title}
              className={`mr-[30px] p-1 uppercase font-bold rounded-lg hover:text-gray-800 duration-300 hover:bg-red-700`}
              onClick={() => {
                router.push(url);
              }}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="flex justify-center items-center ">
          <button
            type="button"
            className="flex bg-yellow-400 rounded-full p-2"
            onClick={() => {
              router.push("/order");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>

            {total > 0 && (
              <p className="ml-2 font-medium">{formatearDinero(total)}</p>
            )}
          </button>
          <button
            type="button"
            className={`ml-11 flex items-center font-bold text-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <div className="ml-2">
              <p>Bienvenido(a)</p>
              <p>Iniciar Sesi??n</p>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
