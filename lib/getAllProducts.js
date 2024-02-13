import fetchCmsAPI from "./connectDatoCms";

export default function getAllProducts() {
    const data = fetchCmsAPI("{ allProdutos { animal slug descricao id imagem { url, alt, title } preco quantidade raca titulo unidadesembalagem  _updatedAt} }")
    return data
}