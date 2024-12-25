import { transactions } from "@/constants/transactions";
import { cn, formatAmount, formatDateTime } from "@/lib/utils";
import { ChevronRight, MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TransactionsCard = () => {
  return (
    <section className="min-h-[519px] rounded-xl bg-white col-span-12 lg:col-span-7 row-span-2 max-lg:order-8 py-6 px-5 sm:px-8">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[#201F24] text-xl font-semibold">Transactions</h3>
        <Link
          href="/transactions"
          className="text-xs text-[#696868] flex items-center gap-3"
        >
          <span>View All</span>
          <ChevronRight size={14} color="#696868" />
        </Link>
      </div>

      <div className="pt-8 flex flex-col gap-8">
        {transactions.map((data, index) => {
          const formattedAmount = formatAmount(parseInt(data.amount));
          const formattedDate = formatDateTime(new Date(data.date)).dateOnly;

          return (
            <div key={index} className="flex justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                {index === 1 || index === transactions.length - 1 ? (
                  <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: `${data?.bg}`}}>
                    <Image
                      src={data.image}
                      alt={data.name}
                      width={20}
                      height={20}
                    />
                  </div>
                ) : (
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <h6 className="text-sm sm:text-base font-semibold">{data.name}</h6>
              </div>

              <div className="flex flex-col items-end gap-2">
                <h6
                  className={cn(
                    "font-semibold flex items-center",
                    data.trxType === "credit"
                      ? "text-[#277C78]"
                      : "text-[#201F24]"
                  )}
                >
                  {data.trxType === "credit" ? (
                    <PlusIcon size={13} />
                  ) : (
                    <MinusIcon size={12} />
                  )}
                  {formattedAmount}
                </h6>
                <small className="text-[#696868]">{formattedDate}</small>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TransactionsCard;
