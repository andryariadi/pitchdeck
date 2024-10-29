import Search from "@/components/Search";
import { Boxes } from "@/components/ui/background-boxes";

type HeroProps = {
  tag?: string;
  title: string;
  desc?: string;
  field?: boolean;
};

const HeroSection = ({ tag, title, desc, field }: HeroProps) => {
  return (
    <section className="relative h-96 w-full max-w-[85rem] mx-auto mt-10 overflow-hidden border border-primary border-opacity-60 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-primary opacity-5 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <div className="b-amber-500 relative z-20 flex flex-col items-center gap-6">
        {tag && (
          <div className="bg-gradient-to-r from-primary to-violet-500 px-5 py-3 rounded-md">
            <span className="uppercase text-gray-300 font-bold">{tag}</span>
          </div>
        )}

        <div className="b-amber-500 w-full max-w-[48.5rem]">
          <h1 className="text-5xl uppercase font-bold text-center bg-gradient-to-r from-primary to-violet-500 text-transparent bg-clip-text">{title}</h1>
        </div>

        {desc && <p className="text-gray-300">{desc}</p>}

        {field && <Search />}
      </div>

      <Boxes />
    </section>
  );
};

export default HeroSection;
