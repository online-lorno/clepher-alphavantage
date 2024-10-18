import type { Metadata } from "next";

import SymbolDetails from "@/components/SymbolDetails";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  return {
    title: `${id} - Clepher - Alphavantage API integration`,
  };
}

export default function SymbolDetailsPage() {
  return <SymbolDetails />;
}
