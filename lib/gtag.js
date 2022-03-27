import Script from "next/script"

export const Analytics = () => (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MTB3BGJQCG', {
                page_path: window.location.pathname,
              });
            `
        }}
      />
    </>
  )
export const pageview = (url) => {
    window.gtag('config', "G-MTB3BGJQCG", {
      page_path: url,
    })
}
  
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
}