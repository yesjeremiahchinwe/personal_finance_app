import { formatAmount } from "@/lib/utils";
import Image from "next/image";

const BillsCard = () => {
  return (
    <section className="max-sm:min-h-[118px] min-h-[190px] bg-[#201F24] rounded-xl p-7 flex-grow">
      <div className="h-full flex items-center sm:flex-col sm:justify-between sm:items-start gap-x-8 gap-y-4">
        <Image
          src="/assets/bills-icon.svg"
          width={34}
          height={34}
          alt="Bills"
        />
        <div>
          <h2 className="text-white text-base font-normal">Total Bills</h2>
          <h3 className="text-white text-4xl font-bold pt-2">
            {formatAmount(384.98)}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default BillsCard;
