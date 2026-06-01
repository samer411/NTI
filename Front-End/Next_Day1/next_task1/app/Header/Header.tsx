import Link from "next/link";

function Header() {
  const ulData = [
    { href: "/", name: "home" },
    { href: "/about", name: "about" },
    { href: "/products", name: "products" },
    { href: "/service", name: "services" },
  ];

  const data = ulData.map((e, i) => {
    return (
      <Link href={e.href} key={i}>
        <li>{e.name}</li>
      </Link>
    );
  });
  return (
    <div className="flex justify-around bg-[#262626] text-amber-50 capitalize p-5 items-center">
      <div>logo</div>
      <ul className="flex gap-[4vw]">{data}</ul>
    </div>
  );
}

export default Header;
