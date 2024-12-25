import { formatAmount } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PotsCard = () => {
  const formattedAmount = formatAmount(850);

  const expenses = [
    {
      title: "Savings",
      value: "159",
      bg: "#277C78"
    },
    {
      title: "Gift",
      value: "40",
      bg: "#82C9D7"
    },
    {
      title: "Concert Ticket",
      value: "110",
      bg: "#626070"
    },
    {
      title: "New Laptop",
      value: "450",
      bg: "#F2CDAC"
    },
  ]

  return (
    <section className="min-h-[218px] rounded-xl bg-white col-span-12 lg:col-span-7 row-span-1 p-5 sm:p-6">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[#201F24] text-xl font-semibold">Pots</h3>
        <Link
          href="/pots"
          className="text-xs text-[#696868] flex items-center gap-3"
        >
          <span>See Details</span>
          <ChevronRight size={14} color="#696868" />
        </Link>
      </div>

      <div className="mt-6 flex max-xl:flex-col gap-5 w-full">
        <div className="bg-[#F8F4F0] min-h-[110px] rounded-xl flex items-center justify-center basis-[50%] py-4 pr-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/dollar_pot.png"
              alt="Doolar Pot"
              width={40}
              height={40}
            />

            <div className="flex flex-col gap-1 items-center justify-center">
              <h6 className="text-sm">Total Saved</h6>
              <h3 className="text-2xl font-semibold">{formattedAmount}</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-y-5 gap-x-10 max-sm:w-full w-fit">
            {expenses.map(({ title, value, bg }) => {
              const formattedValue = formatAmount(parseInt(value))

              return (
              <div key={title} className={`border-l-[4px] ps-3`} style={{ borderColor: `${bg}`}}>
                <h6 className="text-[#696868] text-xs">{title}</h6>
                <h5 className="font-semibold pt-1">{formattedValue}</h5>
              </div>
            )
})}
          </div>
      </div>
    </section>
  );
};

export default PotsCard;
