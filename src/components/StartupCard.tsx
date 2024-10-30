import Image from "next/image";
import { TbInfoCircle } from "react-icons/tb";

const StartupCard = ({ post }: StartupTypeCard) => {
  return (
    <article className="card b-amber-500 relative text-[#eee] w-[350px] flex-shrink-0">
      <div className="author bg-secondary w-[71%] h-[5rem] flex justify-center items-center gap-[20px] p-[10px] rounded-t-[35px]">
        <div className="bg-gradient-to-r from-primary to-violet-500 w-[10rem] h-[3rem] flex items-center justify-center rounded-full">
          <div className="bg-secondary w-[97%] h-[90%] flex items-center justify-center rounded-full">
            <p className="text-sm bg-gradient-to-r from-primary to-violet-500 text-transparent bg-clip-text">{post._createdAt}</p>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-secondary px-5 flex items-center justify-between">
        <div className="b-rose-500">
          <span className="text-sm">{post.author.name}</span>
          <h3 className="text-2xl font-bold">{post.title}</h3>
        </div>
        <div>
          <Image src={post.author.avatar} alt="Avatar" width={50} height={50} className="rounded-full object-cover" />
        </div>
      </div>

      <div className="bg-secondary px-5 py-3 max-h-[5rem]">
        <p className="line-clamp-2 text-sm text-gray-400">{post.description}</p>
      </div>

      <div className="bg-secondary px-5 py-3 max-h-[15rem]">
        <div className=" relative w-full h-[10rem]">
          <Image src={post.image} alt="Image" fill className="object-cover rounded-md" />
        </div>
      </div>

      <div className="shadow bg-secondary px-5 flex items-center justify-between h-[5rem] rounded-b-[35px]">
        <span className="text-sm text-violet-500 font-semibold border border-violet-500 p-2 rounded-full">{post.category}</span>
        <TbInfoCircle size={26} className="text-violet-500" />
      </div>
    </article>
  );
};

export default StartupCard;
