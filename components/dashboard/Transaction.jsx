const Transaction = () => {
  const transactionData = [
    {
      text: "#281209",
      colorText: true,
    },
    {
      text: "7 July, 2023",
    },
    {
      text: "₹1,278.23",
      justifyEnd: true,
    },
    {
      text: "₹22",
      justifyEnd: true,
    },
  ];
  return (
    <div className="flex gap-[40px] h-[48px] px-[12px] py-[14px] rounded border-b">
      {transactionData.map((item, index) => (
        <div
          key={index}
          className={`w-full flex items-center ${
            item.justifyEnd && "justify-end"
          }`}
        >
          <p
            className={`text-sm ${
              item.colorText ? "text-idColor" : "text-customBlack"
            }`}
          >
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Transaction;
