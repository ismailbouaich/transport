"use client"

import { useState, useEffect } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 h-1 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
