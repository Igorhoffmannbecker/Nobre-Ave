import Link from "next/link"

export default function Footer() {
    return (
    <footer>
      <div>
        <h2>Nobre Ave</h2>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#sobreNos">Sobre Nós</Link></li>
          <li><Link href="/produtos">Produtos</Link></li>
      </div>
    </footer>
    )
}