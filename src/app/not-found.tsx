import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-gray-100 p-4">
      <div className="text-yellow-400 animate-bounce mb-8">
        <AlertTriangle size={64} />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-gray-600 dark:text-gray-400">
        404 - Page Not Found
      </h1>
      <p className="text-xl mb-8 text-center text-gray-600 dark:text-gray-400">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Button
          asChild
          variant="outline"
          className="group bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
}
