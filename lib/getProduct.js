import fetchCmsAPI from "./connectDatoCms";

export default async function getProduct(id) {
    const data = await fetchCmsAPI(`{ allProdutos (filter:  { id: { eq: ${id} } }) { animal  descricao id imagens { url } preco ml quantidade racas titulo } }`)
    return data
}