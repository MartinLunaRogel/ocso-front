import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className="bg-orange-200 w-screen h-screen ovwelow-hidenc grid ">
        <div className="place-content-center place-self-center plce-item-center text-center">
          <div className="flex flex-col items-center botton-10 relative">
            <Image 
              src="/Oxxo_Logo.svg" 
              alt="Logo de oxxo" 
              width={200} 
              height={0}
            />
          </div>
          {children}
        </div>
    </div>);
}