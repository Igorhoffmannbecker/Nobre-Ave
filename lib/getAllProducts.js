import fetchCmsAPI from "./connectDatoCms";

export default function getAllProducts() {
    const data = fetchCmsAPI("{ allProdutos { animal descricao id imagens { url } preco quantidade racas titulo unidadesEmbalagem } }")
    return data
}