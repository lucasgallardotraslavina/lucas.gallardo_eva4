import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav>
      <Link href="/registrarcomponentes">registrar_componentes</Link>
      <Link href="/tabla_datos">tabla_datos</Link>
    </nav>
    </>
  );
}
