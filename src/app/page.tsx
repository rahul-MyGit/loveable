import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";

export default function Home() {
  const trpc = useTRPC();
  trpc.askAI.queryOptions({ text: "World" });
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-500 text-4xl">
      Hello World
      <Button>Click me</Button>
    </div>
  );
}
