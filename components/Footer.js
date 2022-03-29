import Image from "next/image";
const Footer = () => {
  return (
    <div className="w-full flex flex-col md:grid md:grid-cols-8 bg-slate-500 text-white font-semibold text-xl text-center">
      <div className="col-start-1 col-end-3 text-base">
        <Image
          width={100}
          height={100}
          src={"/assets/img/img/logo.png"}
          alt="logo imagen"
        />
        <p>Copyright © 2021.</p>
        <p>@Carlozc90 All Rights Reserved</p>
      </div>
      <div className="grid grid-cols-3 mt-2 col-start-3 col-end-7">
        <div>
          <p>NUESTROS SERVICIOS</p>
          <button className="mt-3">Ventas Corporativas</button>
        </div>
        <div>
          <p className="">NOSOTROS</p>
          <button className="mt-3">Protocolos de Bioseguridad</button>
          <button className="mt-3">Trabaje con Nosotros</button>
        </div>
        <div>
          <p>ATENCIÓN AL CLIENTE</p>
          <button className="mt-3">Contáctenos</button>
          <button className="mt-3">Políticas y Términos</button>
        </div>
      </div>
      <div className="col-start-7 col-end-9 ">
        <p>Siganos</p>
        <div className="grid grid-cols-2 mt-4">
          <a className="ml-10 mt-1 border-2 w-[40px] h-[40px] rounded-full flex pl-[2px] justify-self-center">
            <Image
              width={29}
              height={29}
              src={`/assets/img/img/facebook.svg`}
              alt={`Imagen facebook`}
            />
          </a>
          <a className="-ml-10 mt-1 border-2 w-[40px] h-[40px] rounded-full flex pl-[2px] justify-self-center">
            <Image
              width={29}
              height={29}
              src={`/assets/img/img/facebook.svg`}
              alt={`Imagen facebook`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
