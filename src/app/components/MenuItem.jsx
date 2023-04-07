import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-3xl sm:hidden mx-4" />
        <p className="text-2xl font-bold hidden sm:inline my-2 ">{title}</p>
      </Link>
    </div>
  );
}
