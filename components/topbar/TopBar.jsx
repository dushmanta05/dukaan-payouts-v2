import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SideBar from "../sidebar/SideBar";

const TopBar = () => {
  const navIcons = [
    {
      src: "/images/svg/message-circle.svg",
      alt: "message icon",
    },
    {
      src: "/images/svg/down-triangle-circle.svg",
      alt: "dropdown icon",
    },
  ];

  return (
    <div className="text-black px-[32px] py-[12px] flex justify-between items-center gap-[16px]">
      <div className="flex justify-start items-center gap-[16px]">
        <div className="flex justify-start items-center gap-[12px]">
          <div className="lg:hidden flex">
            <Sheet>
              <SheetTrigger className="lg:hidden transition">
                <Image
                  src="/images/svg/bar.svg"
                  width={33}
                  height={33}
                  alt="bar"
                />
              </SheetTrigger>
              <SheetContent side="left" className="bg-primary w-[224px] p-0">
                <SideBar className="flex" />
              </SheetContent>
            </Sheet>
          </div>
          <p className="text-customBlack text-opacity-12 text-base">Payments</p>
        </div>
        <div className="hidden lg:flex items-center justify-start gap-[6px]">
          <Image
            src="/images/svg/question-circle.svg"
            height={14}
            width={14}
            alt="question-circle"
          />
          <p className="text-subtitle text-xs">How it works</p>
        </div>
      </div>
      <div className="hidden md:flex rounded-md border h-[40px] py-[9px] px-[16px] w-[400px] relative bg-secondary justify-start items-center gap-[8px]">
        <Image
          src="/images/svg/search.svg"
          height={16}
          width={16}
          alt="search"
        />
        <p className="text-search">Search features, tutorials, etc.</p>
      </div>
      <div className="flex justify-end items-center gap-[8px]">
        {navIcons.map((icon, index) => (
          <div key={index}>
            <Image src={icon.src} height={40} width={40} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
