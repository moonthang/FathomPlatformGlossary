import { Storybook } from "@/components/storybook";
import { vocabulary } from "@/lib/vocabulary";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center p-4 sm:p-8">
      <Storybook vocabulary={vocabulary} />
    </main>
  );
}
