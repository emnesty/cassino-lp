"use client"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const AOSInit: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return null
}

export default AOSInit
