import HeroSection from "@/components/HeroSection";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  console.log(query, "<---dihomepage");

  return <HeroSection tag="Pitch, Vote and Grow" title="Pitch Your Startup, Connect With Entepreneurs" desc="Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions" field query={query} />;
}
