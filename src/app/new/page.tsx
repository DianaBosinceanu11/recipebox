'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Page(){
  const [title, setTitle] = useState('')
  const router = useRouter()

  function add(){
    if(!title.trim()) return
    const items = JSON.parse(localStorage.getItem('items') || '[]')
    items.push({ id: crypto.randomUUID(), title, status: 'todo' })
    localStorage.setItem('items', JSON.stringify(items))
    router.push('/') // back to List
  }

  return (
    <div className="space-y-3">
      <input
        value={title}
        onChange={e=>setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 rounded w-full"
      />
      <button onClick={add} className="px-3 py-2 rounded bg-black text-white">
        Add
      </button>
    </div>
  )
}
