'use client'
import { useEffect, useState } from 'react'
import Link from "next/link";

type Item = { id: string; title: string; status: string }

export default function ListClient(){
  const [data, setData] = useState<Item[]>([])

  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('items') || '[]')
    setData(items)
  }, [])

  return (
    <ul className="space-y-2">
      {data.map(it=>(
        <li key={it.id}>
          <Link href={`/item/${it.id}`} className="block p-3 bg-gray-100 rounded hover:bg-gray-200">
            {it.title}
          </Link>
        </li>
      ))}
      {data.length === 0 && <p className="text-sm text-gray-500">No items yet.</p>}
    </ul>
  )
}