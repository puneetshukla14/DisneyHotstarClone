"use client";

import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "./link";
import Links from "./links";

const list = [
  {
    id: 1,
    href: "/search",
    Icon: MagnifyingGlassIcon,
  },
  {
    id: 2,
    href: "/",
    Icon: HomeIcon,
  },
  {
    id: 3,
    href: "/profile",
    Icon: UserIcon,
  },
];

const Horizontal = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 tablet:hidden">
      <Links>
        {list.map(({ id, href, Icon }) => (
          <Link key={id} href={href} Icon={Icon} />
        ))}
      </Links>
    </nav>
  );
};

export default Horizontal;
