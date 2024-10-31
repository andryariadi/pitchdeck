import HeroSection from "@/components/HeroSection";
import { formatDate } from "@/libs/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, {
    id: id,
  });

  const datePost = formatDate(post._createdAt);

  if (!post) return notFound();

  console.log(post, "<---didetailPage");

  return (
    <>
      <HeroSection tag={datePost} title={post.title} desc={post.description} />

      <section className="bg-rose-600 w-full max-w-6xl mx-auto mt-10 space-y-10">
        {/* Image section */}
        <div className="bg-violet-500 relative w-full h-[30rem]">
          <Image src={post.image} alt={post.title} fill className="object-cover rounded-lg" />
        </div>

        {/* Information */}
        <div className="bg-amber-500 w-full max-w-4xl mx-auto space-y-5">
          {/* User and category information */}
          <div className="bg-sky-500 flex items-center justify-between">
            {/* User */}
            <div className="flex items-center gap-3">
              <Link href={`/user/${post.author?._id}`}>
                <Image src={post.author?.image} alt={post.author?.name} width={50} height={50} className="object-cover rounded-full drop-shadow-lg" />
              </Link>

              <div className="flex flex-col">
                <span className="font-medium text-[20px]">
                  {post.author?.name} - {post.title}
                </span>
                <span className="font-medium text-[16px] text-gray-400">{post.author?.email}</span>
              </div>
            </div>

            {/* Category */}
            <div className="bg-gradient-to-r from-primary to-violet-500 w-[10rem] h-[3rem] flex items-center justify-center rounded-full">
              <div className="bg-secondary w-[97%] h-[90%] flex items-center justify-center rounded-full">
                <p className="text-sm bg-gradient-to-r from-primary to-violet-500 text-transparent bg-clip-text">{post.category}</p>
              </div>
            </div>
          </div>

          {/* Post information */}
          <div className="bg-green-600 space-y-3">
            <h3 className="text-[30px] font-bold">Pitch Details</h3>

            <p>{post.description}</p>
          </div>
        </div>

        {/* Editor */}
        <div>Editor</div>
      </section>
    </>
  );
};

export default DetailPage;
