
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Thank you for joining the waiting list!");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 font-montserrat">
      <div className="flex-1 w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-16 animate-fade-up">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-3">
          <img 
            src="/lovable-uploads/1cf57817-206d-4cdc-b736-2b4f4d8aafb5.png" 
            alt="Aurtho Logo" 
            className="w-64 sm:w-80 animate-fade-in"
          />
          <p className="text-gray-200 text-lg sm:text-xl tracking-wide animate-fade-in delay-200">
            Know your money habits with AI
          </p>
        </div>

        {/* Waiting List Form */}
        <form 
          onSubmit={handleSubmit}
          className="w-full max-w-md animate-fade-in delay-300"
        >
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email address"
              className="w-full px-6 py-4 rounded-full bg-transparent input-gradient border border-gray-800 focus:border-gray-600 outline-none text-white placeholder:text-gray-500 pr-12 transition-all duration-300"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 bg-white hover:bg-gray-200 transition-colors duration-300"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </form>
      </div>

      {/* App Store Text */}
      <p className="text-gray-300 text-sm sm:text-base tracking-wide animate-fade-in delay-400 mt-auto pt-8">
        Coming soon to the App Store
      </p>
    </div>
  );
};

export default Index;
