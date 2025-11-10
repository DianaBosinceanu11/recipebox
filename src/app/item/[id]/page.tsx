'use client'
import { useParams } from "next/navigation";

export default function Page() {
    const { id } = useParams();
    const items = JSON.parse(localStorage.getItem ("items") || "[]");
    const item = items.find((i:any) => i.id === id );

    if (!item) return <p>Item not found.</p>;

    return (
        <div className="space-y-2">
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p>Status: {item.status}</p>
        </div>
    );
}