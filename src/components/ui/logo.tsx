import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link
        data-reveal
        href="/"
        className="font-heading text-lg font-semibold tracking-normal"
        aria-label="Home"
      >
        rakibul<span className="text-primary">.dev</span>
      </Link>
    </>
  );
};

export default Logo;
