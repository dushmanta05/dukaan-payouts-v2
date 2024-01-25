const Transaction = () => {
  return (
    <div className="flex gap-[40px] h-[48px] px-[12px] py-[14px] rounded border-b">
      <div className="w-full flex">
        <p className="text-idColor text-sm">#281209</p>
      </div>
      <div className="w-full flex items-center">
        <p className="text-sm text-customBlack">7 July, 2023</p>
      </div>
      <div className="w-full flex justify-end items-center">
        <p className="text-sm text-customBlack">₹1,278.23</p>
      </div>
      <div className="w-full flex justify-end items-center">
        <p className="text-sm text-customBlack">₹22</p>
      </div>
    </div>
  );
};

export default Transaction;
