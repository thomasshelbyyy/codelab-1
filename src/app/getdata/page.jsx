"use client"

import getDocument from "@/libs/firebase/firestore/getData"
import { useEffect, useState } from "react"

const Page = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const { result, error } = await getDocument("users", "user-id")
            if (result) {
                setData(data)
            }
        }

        getData()
    }, [data])

    console.log(data)

    return <p>hola</p>
}
export default Page