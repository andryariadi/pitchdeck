import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/libs/utils";

export default function Home() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-violet-900 opacity-90 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-violet-900 opacity-90 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>Tailwind is Awesome</h1>
      <Boxes />
      <p className="text-center mt-2 text-neutral-300 relative z-20">Framer motion is the best animation library ngl</p>
    </div>
  );
}
