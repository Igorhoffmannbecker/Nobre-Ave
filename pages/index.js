import Link from 'next/link'
import {useState} from "react"
import Advantage from '../components/Advantage.js'
import Slider from "../components/Slider.js"
import getAllBanners from "../lib/getAllBanners"
import Card from "../components/Card.js"
import getAllProducts from '../lib/getAllProducts.js'
import Image from "next/image"


export default function Home({banners, produtos}) {
  const [toggleOpen, setToggleOpen] = useState(false)
  console.log(produtos)
  return (
    <>
    <header>
      <menu>
        <div className="logo"><b>Nobre</b> Ave</div>
        <div className="input">
          <input type="search" placeholder="Oque você está buscando"/>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </button>
        </div>  
        <nav>
          <ul className="links" id="links-menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#sobreNos">Sobre Nós</Link></li>
          </ul>
          <button className="toggle" onClick={() => {
            setToggleOpen(!toggleOpen)
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#9c7855"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          </button>
          {toggleOpen && (
            <ul className="toggle-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Sobre Nós</Link></li>
            </ul>
          )}
        </nav>
      </menu>
    </header>
    <main>
      <section className="slider">
         <Slider banners={banners}/>
      </section>
      <section id="vantagens">
        <Advantage title="Entrega Rápida" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in semper dolor">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="48px" fill="#9c7855"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
        </Advantage>
        <Advantage title="Qualidade" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in semper dolor">
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="40px" fill="#9c7855"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
        </Advantage>
        <Advantage title="Preço Òtimo" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in semper dolor">
           <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="48px" fill="#9c7855"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
        </Advantage>
      </section>
      <section id="products">
         <h1>Produtos</h1>
         <div className="products">
           {produtos.slice(0,4).map(produto => {
             return (<>
              <Card title={produto.titulo} description={produto.descricao} price={produto.preco} id={produto.id} img={produto.imagens[0].url}/>
             </>)
           })}
         </div>
      </section>
      <section id="sobreNos">
           <div className="imagem">
             imagem de codornas ou ovos bonita
           </div>
           <div className="text">
             <h1>Sobre Nós</h1>
             <p>
               <p>Texto de 2 parágrafos para falar sobre o negócio</p>
               <p>Vestibulum sodales placerat nisi ac viverra. Sed venenatis rhoncus sem, at rhoncus ipsum fermentum at. Curabitur vulputate ex eu eros tristique, vitae finibus risus rhoncus. Quisque in dictum nisi. Vivamus lorem lacus, consequat quis lectus non, convallis pellentesque urna. Donec dignissim justo erat, at elementum velit ullamcorper non.</p>
               <p>Urabitur nec mauris suscipit, posuere odio sit amet, viverra felis. Nullam nec convallis nulla. Proin imperdiet dignissim metus sit amet hendrerit. In eget tempus massa. Suspendisse non placerat nibh. Aliquam posuere malesuada fermentum. Aenean at congue est</p>
             </p>
           </div>
      </section>
    </main>
    <footer>
      Rodapé
    </footer>
    </>
  )
}

export async function getStaticProps(context) {
  const {allBanners} = await getAllBanners();
  const {allProdutos} = await getAllProducts();
  return {
    props: {banners: allBanners, produtos: allProdutos},
    revalidate: 60
  }
}