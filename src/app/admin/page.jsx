"use client"

import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

const Page = () => {
    const { user } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        if (user === null) router.push("/")
    }, [user, router])

    return (<h1>Only logged in users can view this page</h1>)
}

export default Page