import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-gradient-to-b from-teal-500 to-teal-700 py-2 text-center text-white">
      <h1 className="text-3xl">MOID UDDIN Website Header</h1>
      <div>
        <ul className="flex items-center justify-center space-x-4  text-white ">
          <li className="hover:font-bold bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg p-2">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:font-bold bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg p-2">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:font-bold bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg p-2">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
