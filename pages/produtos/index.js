import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import getAllProducts from "../../lib/getAllProducts";
import {useState, useContext, useEffect} from "react";
import InputValueContext from "../../contexts/InputValueContext"
import Fuse from "fuse.js"
import Head from "next/head"
import NaoEncontrado from "../../components/NaoEncontrado";

export default function Produtos({produtos}) {
    const [data, setData] = useState(produtos)
    const [order, setOrder] = useState("n")
    const {valueInput, setValueInput} = useContext(InputValueContext)
    const fuse = new Fuse(produtos, {
        keys: ["titulo", "raca"], 
        ignoreLocation: true
    })
    function handleFormatData(dados) {
        if (dados.every((objeto) => objeto.item !== undefined)) {
          const newFormat = [];
          dados.map((produto) => newFormat.push(produto.item));
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
    
    const ogImage = data.length !== 0 ? data[0].imagem[0].url : produtos[0].imagem[0].url;
    return (
        <>
        <Head>
        <title>Veja nossas opções - Nobre Ave - Compre ovos de codorna galados/férteis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Somos uma empresa de venda de ovos de codorna galados/férteis, localizada em Cerro Largo RS. Durante mais de 2 anos trabalhamos no cruzamento  de genética de todas as raças, fazendo que nossa genética fosse única e conseguindo assim, ótimas aves." />
        <meta name="keywords" content="ovos de codorna, ovos de codorna galados, ovos galados, ovos de codorna férteis, ovos galados de godornas gigantes, ovos galados de codornas gigantes"/>
        <meta name="robots" content="index, follow" />
        <meta name="language" content="pt-BR" />
        <meta rel="canonical" href="https://ovosdecodorna.com/produtos" />
        <meta property="og:title" content="Veja nossas opções - Nobre Ave - Compre ovos de codorna" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ovosdecodorna.com/produtos" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Nobre Ave" />
        <meta property="og:description" content="Somos uma empresa de venda de ovos de codorna galados/férteis, localizada em Cerro Largo RS. Durante mais de 2 anos trabalhamos no cruzamento  de genética de todas as raças, fazendo que nossa genética fosse única e conseguindo assim, ótimas aves." />

      </Head>
        {data.length !== 0 && (
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
        )}
        
        <main id="produtos">
            {data.length !== 0 ? (data.map(produto => {
                return (
                  <Card 
                  title={produto.titulo}   
                  description={produto.descricao} 
                  price={produto.preco} 
                  direct={produto.slug} 
                  img={produto.imagem[0]}
                  />
                )
            })) : (<NaoEncontrado/>)}
        </main>
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


