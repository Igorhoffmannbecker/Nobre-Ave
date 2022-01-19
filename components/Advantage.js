export default function Advantage({title, text, children}) {
    return (
        <>
            <div className="advantage">
                <div>
                    {children}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </>
    )
}