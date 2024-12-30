import { recurringBills } from "@/constants";
import { filterAndGetTotalNumberOfBills, formatAmount, totalBillsAmount } from "@/lib/utils";

const SummaryCard = () => {
  const paidBills = filterAndGetTotalNumberOfBills(recurringBills, "paid");
  const upcomingBills = filterAndGetTotalNumberOfBills(recurringBills, "upcoming")
  const dueSoonBills = filterAndGetTotalNumberOfBills(recurringBills, "overdue")

  const totalPaidBills = totalBillsAmount(paidBills);
  const totalUpcomingBills = totalBillsAmount(upcomingBills);
  const totalDueSoonBills = totalBillsAmount(dueSoonBills);

  return (
    <section className="min-h-[190px] bg-white rounded-xl p-5 flex-grow">
      <h2 className="text-[#201F24] text-lg font-bold">Summary</h2>

      <div className="grid gap-2 pt-4">
        <div className="py-4 border-b-[1px] border-[#F2F2F2] flex items-center justify-between">
          <h4 className="text-[#696868] text-sm">Paid Bills</h4>
          <h5 className="font-semibold">{paidBills?.length} ({formatAmount(totalPaidBills)})</h5>
        </div>

        <div className="py-4 border-b-[1px] border-[#F2F2F2] flex items-center justify-between">
          <h4 className="text-[#696868] text-sm">Total Upcoming</h4>
          <h5 className="font-semibold">{upcomingBills?.length} ({formatAmount(totalUpcomingBills)})</h5>
        </div>

        <div className="py-4 flex items-center justify-between">
          <h4 className="text-[#C94736] text-sm">Due Soon</h4>
          <h5 className="font-semibold text-[#C94736]">{dueSoonBills?.length} ({formatAmount(totalDueSoonBills)})</h5>
        </div>
      </div>
    </section>
  );
};

export default SummaryCard;
