import Header from "../../components/Header"
import Slider from "../../components/Slider"
import getProduct from "../../lib/getProduct"
import getPaths from "../../lib/getPaths"
import getAllProducts from "../../lib/getAllProducts"
import {useState} from "react"
import Footer from "../../components/Footer"
import { useRouter } from "next/router"
import Head from "next/head"
export default function Produto({produto}) {
    const [data, setData] = useState(produto.allProdutos[0])
    const Router = useRouter(); 
    const [quantity, setQuantity] = useState(1)
    return (
        <>
            <Head>
                <title>Compre {data.quantidade} Ovos de {data.animal ? (data.animal) : "Codorna"} {data.racas} - Nobre Ave</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content={`Compre ovos de codorna ${data.racas} com alta fertilidade e baixo preço, durante mais de 2 anos trabalhamos no cruzamento 
                    de genética de todas as raças, fazendo que nossa
                    genética fosse única e conseguindo assim, ótimas aves.`}
                />
                <meta name="keywords" content="ovos de codorna, comprar, nobreave, codorna, fertilidade"></meta>
            </Head>
            <Header />
            <div id="information">
                <main className="">
                    <Slider banners={data.imagens} produto/>
                    <div className="info">
                        <div className="mobile-info">
                        <div className="content">
                        <h1>{data.titulo}</h1>
                        <div className="middle">
                        <span>R$99</span>
                        <div className="quantity">Quantidade:  <input type="number" min="1" value={quantity} onChange={(e) => {setQuantity(e.target.value)}} /></div>
                        </div>
                        <div className="buy">
                            <button className="whatsapp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                Whatsapp
                            </button>
                            <button className="mercado-livre">
                                <a href={data.ml}>
                                <img src="/mercado-livre.png" alt="mercado livre" width="36px" height="36px"/>
                                Mercado Livre
                                </a>
                            </button>
                        </div>
                        </div>
                        </div>
                        <div>
                        <h2>Descrição</h2>
                        <p>
                        {data.descricao}
                        </p>
                        </div>
                        <div>
                            <table>
                                <div>
                                <tbody>
                                    {data.animal && (
                                        <tr>
                                            <th className="">Animal</th>
                                            <tb>{data.animal}</tb>
                                        </tr>
                                    )}
                                    {data.racas && (
                                        <tr>
                                            <th>Raças</th>
                                            <tb>{data.racas}</tb>
                                        </tr>
                                    )}
                                    {data.quantidade && (
                                        <tr>
                                            <th className="">Quantidade</th>
                                            <tb>{data.quantidade}</tb>
                                        </tr>
                                    )}
                                    {data.unidadesEmbalagem && (
                                        <tr>
                                            <th className="gray">Quantidade</th>
                                            <tb>{data.unidadesEmbalagem}</tb>
                                        </tr>
                                    )}
                                </tbody>
                                </div>
                            </table>
                        </div>
                    </div>
                </main>
                <aside>
                    <div className="content">
                        <h1>{data.titulo}</h1>
                        <span>R$99</span>
                        <div className="quantity">Quantidade:  <input type="number" min="1" value={quantity} onChange={(e) => {setQuantity(e.target.value)}} /></div>
                        <div className="buy">
                            <button className="whatsapp">
                            <a href={`https://wa.me/5555981041415?text="Olá eu estou interresado em comprar ${quantity}x ${data.titulo}"`} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                Whatsapp
                            </a>
                            </button>
                            <button className="mercado-livre">
                            <a href={`${data.ml}?quantity=${quantity}`} target="_blank">
                                <img src="/mercado-livre.png" alt="mercado livre" width="36px" height="36px"/>
                                Mercado Livre
                                </a>
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps(context) {
    const data = await getProduct(context.params.id);
    return {
      props: { produto: data },
    }
    
}

export async function getStaticPaths() {
    const data = await getPaths()
    const paths =  data.map((p) => ({
        params: { id: `${p.id}`, }, 
    }))
    return {paths, fallback: false}
} 