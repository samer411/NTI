"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
 
  const path = usePathname();
  const ulData: { href: string; name: string }[] = [
    { href: "/", name: "home" },
    { href: "/about", name: "about" },
    { href: "/product", name: "product" },
    { href: "/service", name: "service" },
    { href: "/user-client", name: "client" },
    { href: "/user-server", name: "server" },
  ];
  return (
    <div className="bg-[rgba(0,0,0,0.2)] p-5 flex items-center justify-around capitalize ">
      <div>logo</div>
      <ul className="flex gap-[4vw] text-blue-600">
        {ulData.map((e, i) => {
          return (
            <Link
              key={i}
              href={e.href}
              className={
                path === e.href ? "text-white font-bold text-[18px]" : ""
              }
            >
              <li>{e.name}</li>
            </Link>
          );
        })}
        {/* <Link
          href={"/"}
          className={path === "/" ? "text-white font-bold text-[18px]" : ""}
        >
          <li>home</li>
        </Link>
        <Link
          href={"/about"}
          className={
            path === "/about" ? "text-white font-bold text-[18px]" : ""
          }
        >
          <li>about</li>
        </Link>
        <Link
          href={"/product"}
          className={
            path === "/product" ? "text-white font-bold text-[18px]" : ""
          }
        >
          <li>product</li>
        </Link>
        <Link
          href={"/service"}
          className={
            path === "/service" ? "text-white font-bold text-[18px]" : ""
          }
        >
          <li>service</li>
        </Link> */}
      </ul>
    </div>
  );
}

export default Nav;
