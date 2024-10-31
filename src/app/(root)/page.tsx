import HeroSection from "@/components/HeroSection";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUP_QUERY);

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: {
  //       _id: 1,
  //       name: "Andry",
  //       avatar: "https://i.pinimg.com/564x/cb/10/4b/cb104b414d4d445b010e092794b9b2b8.jpg",
  //     },
  //     _id: 1,
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eius sed quam non quod at? Nemo ab voluptatibus dolorem amet maxime dolorum consectetur. In porro neque atque ipsum ea.",
  //     image: "https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg",
  //     category: "Robots",
  //     title: "AI revengers",
  //   },
  //   {
  //     _createdAt: new Date(),
  //     views: 30,
  //     author: {
  //       _id: 1,
  //       name: "Andry",
  //       avatar: "https://i.pinimg.com/564x/cb/10/4b/cb104b414d4d445b010e092794b9b2b8.jpg",
  //     },
  //     _id: 2,
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eius sed quam non quod at? Nemo ab voluptatibus dolorem amet maxime dolorum consectetur. In porro neque atque ipsum ea.",
  //     image: "https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg",
  //     category: "Robots",
  //     title: "AI revengers",
  //   },
  //   {
  //     _createdAt: new Date(),
  //     views: 26,
  //     author: {
  //       _id: 1,
  //       name: "Andry",
  //       avatar: "https://i.pinimg.com/564x/cb/10/4b/cb104b414d4d445b010e092794b9b2b8.jpg",
  //     },
  //     _id: 3,
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eius sed quam non quod at? Nemo ab voluptatibus dolorem amet maxime dolorum consectetur. In porro neque atque ipsum ea.",
  //     image: "https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg",
  //     category: "Robots",
  //     title: "AI revengers",
  //   },
  //   {
  //     _createdAt: new Date(),
  //     views: 15,
  //     author: {
  //       _id: 1,
  //       name: "Andry",
  //       avatar: "https://i.pinimg.com/564x/cb/10/4b/cb104b414d4d445b010e092794b9b2b8.jpg",
  //     },
  //     _id: 4,
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro eius sed quam non quod at? Nemo ab voluptatibus dolorem amet maxime dolorum consectetur. In porro neque atque ipsum ea.",
  //     image: "https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg",
  //     category: "Robots",
  //     title: "AI revengers",
  //   },
  // ];

  console.log(posts, "<---dihomepage");

  return (
    <>
      <HeroSection tag="Pitch, Vote and Grow" title="Pitch Your Startup, Connect With Entepreneurs" desc="Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions" field query={query} />

      <section className="b-rose-600 w-full max-w-6xl mx-auto mt-10 space-y-5">
        {/* Title */}
        <div className="bg-gradient-to-r from-primary to-violet-500 px-5 py-3 rounded-lg max-w-fit">
          <span className="uppercase text-gray-300 font-bold">{query ? `Search results for "${query}"` : "All Startups"}</span>
        </div>

        {/* Card */}
        <div className="b-amber-500 grid grid-cols-2 md:grid-cols-3 gap-14">{posts?.length > 0 ? posts.map((post: StartupTypeCard) => <StartupCard post={post} key={post._id} />) : <p>No startups found</p>}</div>
      </section>
    </>
  );
}
