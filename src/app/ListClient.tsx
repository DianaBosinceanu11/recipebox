'use client'
import { useEffect, useState } from 'react'

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
        <li key={it.id} className="p-3 rounded bg-gray-100">
          <div className="font-medium">{it.title}</div>
          <div className="text-sm text-gray-600">{it.status}</div>
        </li>
      ))}
      {data.length === 0 && <p className="text-sm text-gray-500">No items yet.</p>}
    </ul>
  )
}
