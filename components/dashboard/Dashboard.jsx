import Image from "next/image";
import OrderSummaryCard from "./OrderSummaryCard";
import Transaction from "./Transaction";
import PaginationNumber from "./PaginationNumber";

const Dashboard = () => {
  const items = [
    { title: "Order ID" },
    {
      title: "Order Date",
      src: "/images/svg/small-down-triangle.svg",
      dimension: 8,
      alt: "small-down-triangle",
    },
    { title: "Order Amount", justifyEnd: true },
    {
      title: "Transaction Fees",
      src: "/images/svg/small-info.svg",
      dimension: 14,
      alt: "small info",
      justifyEnd: true,
    },
  ];

  const paginationNumbers = [
    { number: "1", className: "hidden md:flex" },
    { number: "2", className: "hidden md:flex" },
    { number: "...", className: "hidden md:flex" },
    { number: "10", className: "flex bg-idColor text-white" },
    { number: "11", className: "hidden md:flex" },
    { number: "12", className: "hidden lg:flex" },
    { number: "13", className: "hidden lg:flex" },
    { number: "14", className: "hidden xl:flex" },
    { number: "15", className: "hidden xl:flex" },
  ];

  return (
    <div className="p-[32px] text-black">
      <div className="flex justify-between ">
        <h1 className="text-customBlack text-xl text-medium">Overview</h1>
        <button className="w-[137px] flex items-center justify-center h-[36px]  bg-white border rounded gap-[8px]">
          <p className="text-subtitle font-normal text-base">Last Month</p>
          <Image
            src="/images/svg/arrow-down.svg"
            height={16}
            width={16}
            alt="arrow-down"
          />
        </button>
      </div>
      <div className="pt-[24px] gap-[20px] flex flex-col md:flex-row justify-between">
        {[
          { title: "Online Orders", value: "231" },
          { title: "Amount Received", value: "₹23,92,312.19" },
        ].map((item, index) => (
          <OrderSummaryCard key={index} title={item.title} value={item.value} />
        ))}
      </div>
      <div className="pt-[32px]">
        <p className="text-customBlack text-xl font-medium pb-[20px]">
          Transactions | This Month
        </p>
        <div className="flex flex-col px-[12px] bg-white rounded-lg pb-[24px]">
          <div className="py-[12px] flex flex-col justify-between gap-[12px] ">
            <div className="flex justify-between items-center gap-[10px]">
              <div className="flex justify-start py-[10px] px-[16px] items-center h-[40px] w-[248px] rounded border gap-[8px]">
                <Image
                  src="/images/svg/search-secondary.svg"
                  width={14}
                  height={14}
                  alt="search-secondary"
                />
                <p className="text-searchId text-sm">Search by order ID...</p>
              </div>
              <div className="flex items-center gap-[12px]">
                {[
                  {
                    src: "/images/svg/sort.svg",
                    dimension: 16,
                    alt: "sort",
                    text: "Sort",
                    class: "flex h-[40px]",
                  },
                  {
                    src: "/images/svg/download.svg",
                    dimension: 20,
                    alt: "download",
                    class: "hidden md:flex h-[36px]",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`justify-center gap-[6px] px-[12px] py-[6px] items-center rounded border ${item.class}`}
                  >
                    {item.text && (
                      <p className="text-subtitle text-base">{item.text}</p>
                    )}
                    <Image
                      src={item.src}
                      width={item.dimension}
                      height={item.dimension}
                      alt={item.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div></div>
          <div className="overflow-x-auto">
            <div className="min-w-[660px]">
              <div className="flex gap-[20px] md:gap-[40px] px-[12px] py-[10px] h-[48px] bg-secondary rounded ">
                {items.map((item, index) => {
                  const divClass = `w-full flex items-center ${
                    item.justifyEnd ? "justify-end" : ""
                  }`;
                  const pClass = "text-subtitle font-normal text-base";
                  const innerDivClass =
                    "flex justify-start items-center gap-[3px]";
                  return item.src ? (
                    <div key={index} className={divClass}>
                      <div className={innerDivClass}>
                        <p className={pClass}>{item.title}</p>
                        <Image
                          src={item.src}
                          width={item.dimension}
                          height={item.dimension}
                          alt={item.alt}
                        />
                      </div>
                    </div>
                  ) : (
                    <div key={index} className={divClass}>
                      <p className={pClass}>{item.title}</p>
                    </div>
                  );
                })}
              </div>
              {new Array(11).fill(null).map((_, index) => (
                <Transaction key={index} />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-[24px] pt-[24px] ">
            <button className="flex gap-[6px] rounded border  items-center pl-[12px] py-[6px] pr-[6px]  ">
              <Image
                src="/images/svg/left-arrow.svg"
                width={18}
                height={18}
                alt="left-arrow"
              />
              Previous
            </button>
            <div className="flex items-center gap-[8px] py-[2px]">
              {paginationNumbers.map(({ number, className }, index) => (
                <PaginationNumber
                  key={index}
                  number={number}
                  className={className}
                />
              ))}
            </div>
            <button className="flex gap-[6px] items-center rounded border pr-[12px] py-[6px] pl-[6px] ">
              Next
              <Image
                src="/images/svg/next.svg"
                width={18}
                height={18}
                alt="next"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
