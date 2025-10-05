"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const trpc = useTRPC();
  const {data} = useQuery(trpc.askAI.queryOptions({ text: "Rahul"}))

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-500 text-4xl">
      <Button>Click me</Button>
      <p>{data?.greeting}</p>
    </div>
  );
}
