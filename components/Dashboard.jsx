const Dashboard = () => {
  return (
    <div className="p-[32px] text-black">
      <div className="flex justify-between ">
        <h1 className="text-black text-xl">Overview</h1>
        <button className="w-[137px] flex items-center justify-center h-[36px] bg-white border rounded">
          <p className="text-light">Last Month</p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
              fill="#4D4D4D"
            />
          </svg>
        </button>
      </div>
      <div className="pt-[24px] gap-[20px] flex justify-between">
        <div className="bg-white h-[118px] w-full flex flex-col justify-between gap-[24px] p-[20px] rounded shadow-box ">
          <p className="text-base">Online orders</p>
          <p className="text-3xl">231</p>
        </div>
        <div className="bg-white h-[118px] w-full flex flex-col gap-[24px] p-[20px] rounded shadow-box">
          <p className="text-base">Amount received</p>
          <p className="text-3xl">₹23,92,312.19</p>
        </div>
      </div>
      <div className="pt-[32px]">
        <p className="text-black pb-[20px]">Transactions | This Month</p>
        <div className="pt-[12px] px-[12px] pb-[24px] bg-white rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard;
