'use client'
import { useParams, useRouter } from "next/navigation";

export default function Page() {
    const { id } = useParams();
    const router = useRouter();


    const items = JSON.parse(localStorage.getItem ("items") || "[]");
    const item = items.find((i:any) => i.id === id );

    function markDone() {
        const updated = items.map((i:any) =>
            i.id === id ? { ...i, status: "done"} : i
        );
        localStorage.setItem("items", JSON.stringify(updated));
        router.push("/");
    }

    if (!item) return <p>Item not found.</p>;

    return (
        <div className="space-y-2">
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p>Status: {item.status}</p>
            {item.status !== "done" && (
                <button
                onClick={markDone}
                className="px-3 py-2 rounded bg-black text-white"
                >
                    Mark as Done ✅
                </button>
            )} 
        </div>
    );
}