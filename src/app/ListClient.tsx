'use client'
import { useEffect, useState } from 'react'
import Link from "next/link";

type Item = { id: string; title: string; status: string }

function safeLoadItems(): Items[] {
  try{
    const raw = localStorage.getItem('items')
    if (!raw) return []
    if (raw === 'udefined' || raw === 'null') return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed as Item[] : []
  } catch {
    return []
  }
}

export default function ListClient(){
  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    setData(safeLoadItems())
  }, [])

  return (
    <ul className="space-y-2">
      {data.map(it => (
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