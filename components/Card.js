export default function Card({title, description, img, price, id}) {
    return (
        <>
        <div className="card">
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