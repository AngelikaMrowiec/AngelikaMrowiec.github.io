import { ReactNode } from "react";

type Props = {
    isTopLeft: boolean;
    children: ReactNode;
    href: string;
}

export default function NavElement({ isTopLeft, children, href }: Props) {
  return (
    <li
    className={`${
      isTopLeft
        ? "text-sm text-left hover:text-stone-200"
        : "transition transform duration-300 ease-in-out hover:scale-105 hover:text-stone-200"
    }`}
  >
    <a href={href}>{children}</a>
  </li>
  )
}
