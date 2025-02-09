import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center mt-20 sm:mt-0 sm:justify-center text-center px-2 py-8">
      <h1 className="text-5xl font-bold mb-4 sm:text-7xl">
        React Powered <span className="text-primary">Forms</span>{" "}
      </h1>
      <h1 className="text-3xl font-bold mb-4 sm:text-5xl">
        A free, open-source form-editor module. 
      </h1>
      <p className="mb-8 sm:text-md max-w-[800px] text-muted-foreground">
        With a focus on accessibility and performance, React Powered is the
        perfect choice to make your next project that little bit easier.
      </p>
      <div>
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({
            className: "px-6 !font-medium",
            size: "lg",
          })}
        >
          Get Stared
        </Link>
      </div>
    </div>
  );
}
