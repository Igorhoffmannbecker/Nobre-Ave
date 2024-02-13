import fetchCmsAPI from "./connectDatoCms";

export default function getAllBanners() {
    const data = fetchCmsAPI("{ allBanners { id img { url alt title } } }")
    return data
}