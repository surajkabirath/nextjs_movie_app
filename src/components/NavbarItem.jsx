import Link from "next/link";
import { Suspense } from "react"; // Import Suspense
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {" "}
      {/* Wrap in Suspense */}
      <NavbarItemContent title={title} param={param} />
    </Suspense>
  );
};

const NavbarItemContent = ({ title, param }) => {
  const searchParams = useSearchParams();
  const currentParam = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          currentParam === param
            ? "'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'"
            : ""
        } cursor-pointer`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
