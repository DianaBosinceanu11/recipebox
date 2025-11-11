'use client'

import { useParams, useRouter } from "next/navigation";
import { useEffect,useState } from "react";

export default function EditPage() {
    const {id} = useParams<{ id: string }>();
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("todoo");

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("items") || "[]");
        const it = items.find((i:any) => i.id === id);
        if (!it) return;
        setTitle(it.title);
        setStatus(it.status);
    }, [id]);

    function save() {
        const items = JSON.parse(localStorage.getItem("items") || "[]");
        const next = items.map((i: any) =>
            i.id === id ? { ...i, title, status } : i
        );
        localStorage.setItem("items", JSON.stringify());
        router.push(`/item/${id}`);
    
    }

    return (
        <div className="space-y-3">
            <h1 className="text-xl font-semibold">Edit item</h1>
            <input
                className="border p-2 rounded w-full"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"            
            />

            <select
                className="border p-2 rounded"
                value={status}
                onChange={e => setStatus(e.target.value)}
            >
                <option value="todoo">todoo</option>
                <option value="in_progress">in_progress</option>
                <option value="done">done</option>
            </select>

            <div className="flex gap-2">
                <button onClick={save} className="px-3 py-2 rounded bg-black text-white">
                    Save
                </button>
                <button onClick={() => router.back()} className="px-3 py-2 rounded bg-gray-200">
                    Cancel
                </button>

            </div>
        </div>
    )



}