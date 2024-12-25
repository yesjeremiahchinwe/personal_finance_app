import { cn, formatAmount } from "@/lib/utils";

const Card = ({ title, value }: CardProps) => {
  const formattedValue = formatAmount(parseInt(value));

  return (
    <div className="flex flex-col first:bg-[#201F24] bg-white justify-between min-h-[111px] py-5 px-6 rounded-xl">
      <h5
        className={cn(
          "text-sm",
          title.includes("Current") ? "text-white" : "text-[#696868]"
        )}
      >
        {title}
      </h5>
      <h3
        className={cn(
          "text-3xl font-semibold",
          title.includes("Current") ? "text-white" : "text-[#201F24]"
        )}
      >
        {formattedValue}
      </h3>
    </div>
  );
};

export default Card;
