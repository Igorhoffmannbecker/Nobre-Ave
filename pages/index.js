import Link from 'next/link'
import Advantage from '../components/Advantage.js'
import Slider from "../components/Slider.js"
import getAllBanners from "../lib/getAllBanners.js"
import Card from "../components/Card.js"
import getAllProducts from '../lib/getAllProducts.js'
import Head from 'next/head.js'
import Image from 'next/image.js'

export default function Home({banners, produtos}) {
  return (
    <>
    <Head>
      <title>Nobre Ave - Compre Ovos de Codorna Férteis</title>
      <meta rel='description' content='Somos uma empresa de venda de ovos de codorna, localizada em Cerro Largo RS. Durante mais de 2 anos trabalhamos no cruzamento  de genética de todas as raças, fazendo que nossa genética fosse única e conseguindo assim, ótimas aves.' />
      <meta name="keywords" content="ovos de codorna, ovos de codorna férteis, ovos galados de godornas gigantes, ovos férteis de codornas gigantes" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />
      <meta rel="canonical" href="https://ovosdecodorna.com/" />
      <meta property="og:title" content="Nobre Ave - Compre Ovos de Codorna Férteis" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ovosdecodorna.com/produtos" />
      <meta property="og:image" content="ovosdecodorna.com/imgs/codorna-home.webp" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Nobre Ave" />
      <meta property="og:description" content="Somos uma empresa de venda de ovos de codorna, localizada em Cerro Largo RS. Durante mais de 2 anos trabalhamos no cruzamento  de genética de todas as raças, fazendo que nossa genética fosse única e conseguindo assim, ótimas aves." />  
    </Head>
    <main>
      <section className="slider">
         <Slider banners={banners}/>
      </section>
      <section className="initialText">
          <h1><strong>Compre ovos de codorna com férteis</strong></h1>
          <p>Durante mais de 2 anos trabalhamos no cruzamento 
            de genética de todas as raças, fazendo que nossa
             genética fosse única e conseguindo assim, ótimas aves.
          </p>
          <button><Link href="/produtos">Ver Produtos</Link></button>
      </section>
      <section id="vantagens">
        <Advantage title="Entrega Rápida e Segura" text="Produto bem embalado e entregue pelo Sedex.">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="48px" fill="#fffcc6"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
        </Advantage>
        <Advantage title="Fertilidade" text="Ovos férteis com alta eclosão e com genética exclusiva. ">
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="40px" fill="#fffcc6"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
        </Advantage>
        <Advantage title="Preço Baixo" text="Preços competitivos e ótimo atendimento.">
           <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="48px" fill="#fffcc6"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
        </Advantage>
      </section>
      <section id="productsHome">
         <h1>Produtos</h1>
         <div className="caixa" id="caixaHome">
           {produtos.slice(0,4).map(produto => {
             return (<>
              <Card title={produto.titulo} description={produto.descricao} price={produto.preco} direct={produto.slug} img={produto.imagem[0]}/>
             </>)
           })}
         </div>
      </section>
      <section id="sobreNos">
           <div className="imagem">
             <Image src="/imgs/codorna-home.webp" fill="true" alt="Codorna"/>
           </div>
           <div className="text">
             <h1>Sobre Nós</h1>
             <p>Somos uma empresa de venda de ovos de codorna, localizada em Cerro Largo RS.</p>
             <p>Durante mais de 2 anos trabalhamos no cruzamento de genética de todas as regiões, fazendo que nossa genética fosse única e conseguindo assim, ótimas aves, com bom desempenho tanto de peso, como de postura.</p> 
             <p>Trabalhamos com 2 Fêmeas por Macho, as aves são novas (MÁXIMO 08 MESES), os machos são substituídos a cada 5 meses.</p>
           </div>
      </section>
    </main>
    </>
  )
}

export async function getStaticProps() {
  const {allBanners} = await getAllBanners();
  const {allProdutos} = await getAllProducts();
  return {
    props: {banners: allBanners, produtos: allProdutos},
    revalidate: 60
  }
}