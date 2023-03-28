import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5"> 
        <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <Link href="/">
                <Image 
                    className="rounded-full"
                    src="https://avatars.githubusercontent.com/u/57049528?v=4"
                    width={50}
                    height={50}
                    alt="logo"
                />
            </Link>
            <h1>Louis Technology</h1>
        </div>

        <div>
            <Link
                href="/"
                className=" px-5 py-3 text-sm md:text-base bg-gray-900 text-[#fbaa99] flex items-center rounded-full text-center"
            >
            Sign up to Louis Technology
            </Link>
        </div>
    </header>
  )
}

export default Header