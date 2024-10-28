import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/libs/utils";

export default function Home() {
  return (
    <div className="relative h-96 w-full max-w-[85rem] mx-auto mt-10 overflow-hidden border border-primary border-opacity-60 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-primary opacity-5 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>Tailwind is Awesome</h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">Framer motion is the best animation library ngl</p>

      <Boxes />
    </div>
  );
}
