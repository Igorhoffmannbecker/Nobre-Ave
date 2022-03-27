import { useRouter } from 'next/router'

export default function Card({title, img, price, direct}) {
    const Router = useRouter()
    function onClick(e) {
        e.preventDefault()
        Router.push(`/produtos/${direct}`)
    }
    return (
        <>
        <div className="card" onClick={(e) => onClick(e)}>
            <div className="capa">
                <img src={img} alt="imagem do produto"/>
            </div>
            <div className="informacaos">
                <h3>{title}</h3>
                <p>R${price}</p>
            </div>    
        </div>
        </>
    )
}

//<p>{description.slice(0,30)}...</p>