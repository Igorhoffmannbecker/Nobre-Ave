import Image from 'next/image'

export default function NaoEncontrado() {
    return (
        <div className="naoEncontrado">
            <div>
                <h1>Nenhum produto foi encontrado.</h1>
                <p>Realize uma nova busca.</p>
            </div>
            <div>
                <Image src="/imgs/codorna-nao-encontrado.jpg" width="400" height="265"/>
            </div>

        </div>
    )
}