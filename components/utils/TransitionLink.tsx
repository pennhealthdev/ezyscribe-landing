"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef, useCallback } from "react";
import Link, { LinkProps } from "next/link";
import Icons from "../icons";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import Lenis from "lenis";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  icon?: keyof typeof dynamicIconImports;
}

export const TransitionLink = ({
  children,
  href,
  icon,
  ...props
}: TransitionLinkProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      lenisRef.current = new Lenis({
        duration: 1.2, // Set the duration of the scroll animation in seconds
        easing: (t) => t, // Custom easing function (linear in this case)
      });

      // Start the Lenis scroll animation loop
      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }, []);

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const targetElement = document.getElementById(href.slice(1));
      if (targetElement && lenisRef.current) {
        lenisRef.current.scrollTo(targetElement);
      }
    },
    [href]
  );

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
