const OrderSummaryCard = ({ title, value }) => {
  return (
    <div className="bg-white h-[118px] w-full flex flex-col justify-between gap-[24px] p-[20px] rounded shadow-box">
      <p className="text-subtitle text-base">{title}</p>
      <p className="text-3xl text-customBlack font-medium">{value}</p>
    </div>
  );
};

export default OrderSummaryCard;
