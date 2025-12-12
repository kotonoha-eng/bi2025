// app/page.tsx
import { LineChart, Point } from "@/components/LineChart";
import salesData from "../data/sales.json";

const points = salesData as Point[];

export default function Page() {
  return (
    <main
      style={{
        padding: "1.5rem",
      }}
    >
      <h1>BI Dashboard</h1>
      <p>ローカル JSON を元にしたサンプルです。</p>
      <LineChart points={points} />
    </main>
  );
}
