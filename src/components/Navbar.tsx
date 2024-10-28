import { handleGithubLogin, handleLogout } from "@/libs/actions";
import { auth } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

const Navbar = async () => {
  const session = await auth();

  console.log(session, "<---dinavbar");

  return (
    <header className="p-5 bg-transparent bg-opacity-90 backdrop-blur-md shadow-lg border-b border-violet-700">
      <nav className="flex items-center justify-between b-rose-600">
        <Link href="/" className="b-green-700">
          <Image src="/logo.svg" width={230} height={230} alt="Pitchdeck" />
        </Link>
        <div className="b-sky-600 flex items-center gap-5">
          {session && session.user ? (
            <>
              <Link href="/startup/create" className="text-gray-400">
                <IoIosAddCircleOutline size={26} />
              </Link>

              <form action={handleLogout} className="b-green-500">
                <button type="submit" className="flex items-center gap-2 border border-gray-500 p-[6px] rounded-lg text-gray-400 text-sm">
                  <AiOutlineLogout size={24} />
                  <span>Logout</span>
                </button>
              </form>

              <Link href={`/user/${session.user.id}`}>{session.user.image && <Image src={session.user.image} width={40} height={40} alt="Avatar" className="rounded-full" />}</Link>
            </>
          ) : (
            <form action={handleGithubLogin} className="b-green-500">
              <button type="submit" className="flex items-center gap-2 border border-gray-500 p-2 rounded-lg text-gray-400 text-sm">
                <ImGithub size={24} />
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
