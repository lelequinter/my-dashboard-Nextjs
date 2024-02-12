'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

export const SidebarMenuItem = ({path,icon,title,subtitle}: Props) => {
    const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`${ pathname === path && 'bg-blue-800' } ${pathname === path ? 'hover:bg-blue-600' : 'hover:bg-white/5'}  w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 transition ease-linear duration-150`}
    >
      <div className="text-white">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">
          {title}
        </span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
