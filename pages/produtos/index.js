import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import getAllProducts from "../../lib/getAllProducts";
import {useState, useContext, useEffect} from "react";
import InputValueContext from "../../contexts/InputValueContext"
import Fuse from "fuse.js"
import Head from "next/head"

export default function Produtos({produtos}) {
    const [data, setData] = useState(produtos)
    const [order, setOrder] = useState("n")
    const {valueInput, setValueInput} = useContext(InputValueContext)
    const fuse = new Fuse(produtos, {
        keys: ["titulo"]
    })
    function handleFormatData(dados) {
        if (dados.every((objeto) => objeto.item !== undefined)) {
          const newFormat = [];
          dados.map((caminhao) => newFormat.push(caminhao.item));
          return newFormat;
        }
        return dados;
      }
    useEffect(() => {
        if(valueInput != "") {
            setData(handleFormatData(fuse.search(valueInput)))
        } else {
            setData(produtos)
        }
    }, [valueInput])

    function handleOrder() {
        switch (order) {
            case 'p+': {
              setData(
                [...data].sort((a, b) => {
                  const c = a.preco > b.preco ? 1 : -1;
                  return c;
                }),
              );
              break;
            }
            case 'p-': {
                setData(
                  [...data].sort((a, b) => {
                    const c = a.preco < b.preco ? 1 : -1;
                    return c;
                  }),
                );
                break;
            }
            case 'q+': {
                setData(
                  [...data].sort((a, b) => {
                    const c = a.quantidade > b.quantidade ? 1 : -1;
                    return c;
                  }),
                );
                break;
            }
            case 'q-': {
                setData(
                  [...data].sort((a, b) => {
                    const c = a.quantidade > b.quantidade ? 1 : -1;
                    return c;
                  }),
                );
                break;
            }
            case 'n': {
              setData(data);
              break;
            }
          }
    }
    return (
        <>
        <Head>
        <title>Veja nossa opções - Nobre Ave - Compre ovos de codorna</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Comprar ovos de codorna, ovos de codorna férteis, ovos galados de godornas gigantes, ovos férteis de codornas gigantes" 
        />
        <meta name="keywords" content="ovos de codorna, comprar, nobreave, codorna, fertilidade"></meta>
      </Head>
        <Header productsPage />
        <div className="options">
            <select value={order} onChange={(e) => {
                e.preventDefault()
                setOrder(e.target.value)
                handleOrder()
            }}>
                <option value="n" disable="true">Ordenar Por</option>
                <option value="p+">Maior Preço</option>
                <option value="p-">Menor Preço</option>
                <option value="q+">Maior Quantidade</option>
                <option value="q-">Menor Quantidade</option>
            </select>
        </div>
        
        <main id="produtos">
            {data && data.map(p => {
                return (
                    <Card title={p.titulo} price={p.preco} img={p.imagens[0].url} direct={p.id} />
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