"use client";
import Link from "next/link";
import Image from "next/image";
// Remove this import that uses the @/ prefix as it might cause issues
// import logo from "@/public/space.jpg";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  
  // Remove Clerk authentication code since it's not being used
  // const { isSignedIn } = useUser();
  // const { openSignIn } = useClerk();

  // Remove these functions since they rely on Clerk
  // const handleCoursesSignIn = () => {...};
  // const handlePracticeSignIn = () => {...};

  return (
    <nav className="bg-black/30 backdrop-blur-sm w-full py-2 px-4 relative z-30">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-8 h-8 mr-2">
            <Image
              src="/space.jpg"
              alt="Logo"
              className="rounded-full object-cover"
              fill
              sizes="32px"
            />
          </div>
          <span className="text-white font-bold">Stellar Graveyard</span>
        </Link>
        
        <div className="flex space-x-4">
          <Link href="/lets-learn" className="text-white hover:text-gray-300">
            Learn
          </Link>
          <Link href="/practice" className="text-white hover:text-gray-300">
            Practice
          </Link>
          <Link href="/discoveries" className="text-white hover:text-gray-300">
            Discoveries
          </Link>
          <Link href="/learn-more" className="text-white hover:text-gray-300">
            More
          </Link>
        </div>
      </div>
    </nav>
  );
}