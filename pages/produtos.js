import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import getAllProducts from "../lib/getAllProducts";
import {useState} from "react"

export default function Produtos({produtos}) {
    const [data, setData] = useState(produtos)
    return (
        <>
        <Header />
        <main id="produtos">
            {data.map(p => {
                return (
                    <Card title={p.titulo} price={p.preco} img={p.imagens[0].url} key={p.id} />
                )
            })}
        </main>
        <Footer />
        </>
    )
}

export async function getStaticProps(context) {
    const {allProdutos} = await getAllProducts();
    return {
      props: {produtos: allProdutos},
      revalidate: 60
    }
  }