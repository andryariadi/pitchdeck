import { handeleLogout, handleGithubLogin } from "@/libs/actions";
import { auth } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  console.log(session, "<---dinavbar");

  return (
    <header className="p-5 bg-transparent bg-opacity-90 backdrop-blur-md shadow-lg border-b border-violet-700">
      <nav className="flex items-center justify-between bg-rose-600">
        <Link href="/" className="bg-green-700">
          <Image src="/logo.svg" width={250} height={250} alt="Pitchdeck" />
        </Link>
        <div className="bg-sky-600 flex items-center gap-3">
          <div className="bg-amber-500 flex items-center gap-3">
            <Link href="/startup/create">
              <span>Create</span>
            </Link>

            <form action={handeleLogout}>
              <button type="submit">Logout</button>
            </form>

            <Link href={`/user/${session?.user?.id}`}>
              <span>{session?.user?.name}</span>
            </Link>
          </div>
          <form action={handleGithubLogin} className="bg-green-500">
            <button type="submit">SignIn</button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
