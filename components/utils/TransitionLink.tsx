"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import Icons from "../icons";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import Lenis from "lenis";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  icon?: keyof typeof dynamicIconImports;
}

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => 1 - Math.pow(1 - t, 3),
});

function raf(time:any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export const TransitionLink = ({
  children,
  href,
  icon,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.slice(1)); // Assumes href is an ID (e.g., "#section-id")
    if (targetElement) {
      lenis.scrollTo(targetElement);
    }
  };

  return (
    <Link onClick={handleScroll} href={href} {...props} className="link last:!mr-0">
      <span className="mask">
        <div className="link-container">
          <span className="link-title1 title">{children}</span>
          <span className="link-title2 title">{children}</span>
        </div>
      </span>
      <div className="link-icon">
        {icon && <Icons name={icon} className="icon" />}
        {icon && <Icons name={icon} className="icon" />}
      </div>
    </Link>
  );
};
