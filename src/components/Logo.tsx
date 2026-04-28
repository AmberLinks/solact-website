import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  href?: string;
  variant?: "default" | "white";
};

export function Logo({
  width = 140,
  height = 40,
  className = "",
  href = "/",
  variant = "default",
}: LogoProps) {
  const src = variant === "white" ? "/images/logo-white.png" : "/images/logo.png";
  return (
    <Link href={href} aria-label="SOLACT" className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="SOLACT"
        width={width}
        height={height}
        priority
        unoptimized
        style={{ height: `${height}px`, width: "auto" }}
      />
    </Link>
  );
}
