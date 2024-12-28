import { cn, formatAmount, formatDateTime } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface Props {
    transaction: DummyTransaction[]
}
const TransactionCard = ({ transaction }: Props) => {

  return (
    <div className="pt-8 flex flex-col gap-8">
        {transaction.map((data, index) => {
          const formattedAmount = formatAmount(data.amount);
          const formattedDate = formatDateTime(new Date(data.date)).dateOnly;

          return (
            <div
              key={index}
              className="flex justify-between items-center gap-8"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src={data.avatar}
                  alt={data.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h6 className="text-sm sm:text-base font-semibold">
                  {data.name}
                </h6>
              </div>

              <div className="flex flex-col items-end gap-2">
                <h6
                  className={cn(
                    "font-semibold flex items-center",
                    data.amount > 0 ? "text-[#277C78]" : "text-[#201F24]"
                  )}
                >
                  {data.amount > 0 && <PlusIcon size={13} />}
                  {formattedAmount}
                </h6>
                <small className="text-[#696868] max-sm:hidden lg:hidden xl:flex">
                  {formattedDate}
                </small>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default TransactionCard