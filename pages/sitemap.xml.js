import getAllProducts from "../lib/getAllProducts";

function generateSiteMap(produtos) {
    const baseUrl = "https://www.ovosdecodorna.com.br";
    console.log(produtos)
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${baseUrl}/</loc>
       <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
     </url>
     <url>
       <loc>${baseUrl}/produtos</loc>
       <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
     </url>
     ${produtos.map(({ slug, _updatedAt }) => {

         return `
       <url>
           <loc>${`${baseUrl}/produtos/${slug}`}</loc>
           <lastmod>${_updatedAt.split("T")[0]}</lastmod>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap(produtos) {
  // getServerSideProps will do the heavy lifting
  console.log(produtos._updatedAt)
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const produtos = await getAllProducts();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(produtos.allProdutos);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {produtos: produtos},
  };
}

export default SiteMap;
