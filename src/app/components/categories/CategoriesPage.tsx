import React, { useState } from "react";


type Cat = { id: number; name: string; budget?: number };


export default function CategoriesPage() {
const [cats, setCats] = useState<Cat[]>([
{ id: 1, name: "Food", budget: 8000 },
{ id: 2, name: "Transport", budget: 3000 },
{ id: 3, name: "Bills", budget: 12000 },
]);


const [name, setName] = useState("");
const [budget, setBudget] = useState<number | "">("");


const addCat = () => {
if (!name.trim()) return;
setCats((prev) => [
...prev,
{ id: Date.now(), name: name.trim(), budget: budget === "" ? undefined : Number(budget) },
]);
setName("");
setBudget("");
};


return (
<section className="space-y-6">
<header>
<h1 className="text-2xl font-semibold">Categories</h1>
<p className="text-white/60">Organize and budget your spending.</p>
</header>


<div className="panel">
<div className="panel-title">Add Category</div>
<div className="flex flex-wrap gap-2">
<input
className="input flex-1 min-w-[200px]"
placeholder="Name (e.g. Entertainment)"
value={name}
onChange={(e) => setName(e.target.value)}
/>
<input
className="input w-[160px]"
type="number"
placeholder="Budget (₹)"
value={budget}
onChange={(e) => setBudget(e.target.value === "" ? "" : Number(e.target.value))}
/>
<button className="btn primary" onClick={addCat}>Add</button>
</div>
</div>


<ul className="grid md:grid-cols-3 gap-3">
{cats.map((c) => (
<li key={c.id} className="card">
<div className="card-title">{c.name}</div>
<div className="card-sub">{c.budget ? `Budget: ₹ ${c.budget.toLocaleString("en-IN")}` : "No budget set"}</div>
</li>
))}
</ul>
</section>
);
}