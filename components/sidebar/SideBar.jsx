import Image from "next/image";
import { sidebarAction } from "./sidebarData";

const SideBar = () => {
  return (
    <div className="hidden lg:flex h-[100vh] w-[224px] bg-primary text-white fixed z-50  py-[16px] px-[10px] gap-[16px] flex-col items-center justify-between">
      <div className="flex flex-col gap-[24px] w-full items-start justify-center">
        <div className="flex justify-evenly px-[8px] items-center w-full gap-[4px]">
          <Image src="/images/navbar/image.png" width={39} height={39} />
          <div className="flex flex-col pl-[6px] w-full">
            <p className="font-medium text-base">Nishayam</p>
            <p className="font-extralight text-sm underline ">Visit Store</p>
          </div>
          <Image
            src="/images/svg/arrow-down-small.svg"
            alt="dropdown"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-col gap-[4px] w-full">
          {sidebarAction.map((item, index) => (
            <div
              key={index}
              className={`flex justify-start items-center gap-[12px] w-full px-[16px] py-[8px] rounded ${
                item.class ? item.class : ""
              }`}
            >
              <Image src={item.src} height={18} width={18} alt={item.title} />
              <p className="font-extralight text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[192px] h-[54px] bg-nav bg-navSecondary rounded flex items-center gap-[10px]  px-[12px] py-[6px] ">
        <Image
          src={"images/svg/credits.svg"}
          height={36}
          width={36}
          alt="credits"
          className="bg-navSecondary"
        />
        <div>
          <p className="text-sm font-extralight">Availble credits</p>
          <p className="text-base">222.10</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
