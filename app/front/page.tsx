'use client'
import { useEffect } from "react"

export default function Front() {
  console.log("hello front end")
  return (
    <div className="m-6 w-full">
        <div className="pt-20 flex justify-center">
            <h1 className="font-bold text-2xl">This is the frontend page</h1>
        </div>
    </div>
  )
}