import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <h1 className="text-2xl">Todos</h1>
        <Link href="/new">New</Link>
      </header>
      <ul></ul>
    </div>
  )
}
