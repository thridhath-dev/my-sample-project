import React from "react";

const data = [
  { id: 1, date: "2025-09-21", desc: "Coffee", cat: "Food", amount: -160 },
  { id: 2, date: "2025-09-20", desc: "Uber", cat: "Transport", amount: -320 },
  { id: 3, date: "2025-09-18", desc: "Salary", cat: "Income", amount: 68000 },
  {
    id: 4,
    date: "2025-09-17",
    desc: "Electricity",
    cat: "Bills",
    amount: -2760,
  },
];

export default function TransactionsPage() {
  return (
    <section className="space-y-6">
      <header className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Transactions</h1>
          <p className="text-white/60">Your latest money moves.</p>
        </div>
        <div className="flex gap-2">
          <input className="input" placeholder="Search..." />
          <button className="btn outline">Export</button>
          <button className="btn primary">Add</button>
        </div>
      </header>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.desc}</td>
                <td>
                  <span className="chip">{t.cat}</span>
                </td>
                <td
                  className={`text-right ${
                    t.amount < 0 ? "text-red-400" : "text-emerald-400"
                  }`}
                >
                  {t.amount < 0 ? "- " : "+ "}₹{" "}
                  {Math.abs(t.amount).toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
