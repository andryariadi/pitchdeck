import HeroSection from "@/components/HeroSection";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Ocotober 12, 2024",
      views: 55,
      author: {
        name: "Andry",
        avatar: "https://i.pinimg.com/564x/cb/10/4b/cb104b414d4d445b010e092794b9b2b8.jpg",
      },
      _id: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eius sed quam non quod at? Nemo ab voluptatibus dolorem amet maxime dolorum consectetur. In porro neque atque ipsum ea.",
      image: "https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg",
      category: "Robots",
      title: "AI revengers",
    },
  ];

  console.log(query, "<---dihomepage");

  return (
    <>
      <HeroSection tag="Pitch, Vote and Grow" title="Pitch Your Startup, Connect With Entepreneurs" desc="Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions" field query={query} />

      <section className="b-rose-600 w-full max-w-6xl mx-auto mt-10 space-y-5">
        {/* Title */}
        <div className="bg-gradient-to-r from-primary to-violet-500 px-5 py-3 rounded-lg max-w-fit">
          <span className="uppercase text-gray-300 font-bold">{query ? `Search results for "${query}"` : "All Startups"}</span>
        </div>

        {/* Card */}
        <div className="b-violet-500">{posts?.length > 0 ? posts.map((post) => <StartupCard post={post} key={post._id} />) : <p>No startups found</p>}</div>
      </section>
    </>
  );
}
