import Heading from "@/components/common/Heading";
import Button from "@/components/common/Button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-90px)]">
      <div className="text-center max-w-md mx-auto px-4">
        <p className="text-primary text-8xl font-bold mb-4">404</p>
        <Heading as="h1" className="mb-4">Page Not Found</Heading>
        <p className="text-gray-500 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button href="/">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
