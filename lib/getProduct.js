import fetchCmsAPI from "./connectDatoCms";

export default async function getProduct(slug) {
    const data = await fetchCmsAPI(`{ allProdutos (filter:  { slug: { eq: "${slug}" } }) { animal  descricao id imagem { url alt title} preco  quantidade raca titulo } }`)
    return data
}