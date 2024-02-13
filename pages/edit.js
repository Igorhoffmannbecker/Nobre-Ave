import Router from "next/router"
import { useEffect } from "react"

export default function Edit() {
    useEffect(() => Router.push("https://nobre-ave-9683.admin.datocms.com/editor"))
    return (
        <>Redirecionando...</>
    )
}