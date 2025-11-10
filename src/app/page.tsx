const receipes = [
  { id:1, title: "🍝 Pasta" },
  { id:2, title: "🥗 Salad" },
  { id:3, title: "🍲 Soup" },
];


export default function Page() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold mb-4">Recipes</h1>
      {receipes.map((receipe) => (
        <div
          key={receipe.id}
          className="p-2 border rounded bg-gray-50"
        >
          {receipe.title}
        </div>
      ))}
    </div>
  );
}