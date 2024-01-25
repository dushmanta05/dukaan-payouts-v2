const PaginationNumber = ({ number, className }) => {
  return (
    <div
      className={`items-center justify-center h-[28px] w-[28px] ${className}`}
    >
      <p className="text-sm">{number}</p>
    </div>
  );
};

export default PaginationNumber;
