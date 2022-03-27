import fetchCmsAPI from "./connectDatoCms";

export default async function getPaths() {
    const data = await fetchCmsAPI(`{ allProdutos { id } }`)
    const paths = data.allProdutos
    return paths
}