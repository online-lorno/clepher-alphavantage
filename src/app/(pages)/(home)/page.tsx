import StockCard from "@/components/StockCard";
import { Apple, Car, Cloud, Laptop, Search } from "lucide-react";
import Link from "next/link";

const stocks = [
  {
    symbol: "IBM",
    name: "International Business Machines",
    value: 132.45,
    change: 1.2,
    icon: Cloud,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    value: 305.78,
    change: -0.5,
    icon: Laptop,
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    value: 148.32,
    change: 0.8,
    icon: Apple,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    value: 2715.9,
    change: -0.3,
    icon: Search,
  },
  { symbol: "TSLA", name: "Tesla Inc.", value: 735.65, change: 2.1, icon: Car },
];

export default function Home() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stocks.map((stock) => (
        <Link key={stock.symbol} href={`/symbol/${stock.symbol}`}>
          <StockCard
            symbol={stock.symbol}
            name={stock.name}
            value={stock.value}
            change={stock.change}
          />
        </Link>
      ))}
    </div>
  );
}
