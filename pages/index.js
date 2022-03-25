import Producto from "../components/Producto";
import useBuffet from "../hooks/useBuffet";
import Layout from "../layout/Layout";

export default function Home() {
  const { categoriaActual } = useBuffet();
  return (
    <div>
      <Layout>
        <h1>categoria nombre</h1>
        <p>personaliza tu pedido</p>
        <div className="grid grid-cols-3 gap-4">
          {categoriaActual?.productos?.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
