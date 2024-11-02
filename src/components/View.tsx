import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
// import { sanityFetch } from "@/sanity/lib/live";
import { writeClient } from "@/sanity/lib/write.client";
import { unstable_after as after } from "next/server";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id });

  // const { data: totalViews } = await sanityFetch({
  //   query: STARTUP_VIEWS_QUERY,
  //   params: { id },
  // });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );

  console.log(totalViews, "<---diview");

  return (
    <div className="bg-green-500 flex justify-end items-center mt-5 fixed bottom-3 left-3">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <div className="text-gray-300 font-medium text-[16px] bg-gradient-to-r from-primary to-violet-500 px-4 py-2 rounded-lg capitalize">
        <span>{totalViews} views</span>
      </div>
    </div>
  );
};

export default View;
