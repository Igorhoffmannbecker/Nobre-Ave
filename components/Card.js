import { useRouter } from 'next/router'
import Image from 'next/image'

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
                <Image src={img.url} {...img} fill={true}/>
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