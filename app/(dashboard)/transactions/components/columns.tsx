"use client";

import { formatAmount, formatDateTime } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";
import Image from "next/image";

export type TransactionColumnType = {
  id: string;
  sender: string;
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
};

export const columns: ColumnDef<TransactionColumnType>[] = [
  {
    accessorKey: "sender",
    header: "Recipient / Sender",
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex items-center gap-4">
          <Image
            src={data.avatar}
            alt={data.name}
            width={40}
            height={40}
            className="max-sm:hidden rounded-full"
          />
          <h6 className="font-semibold text-sm text-[#201F24]">{data.name}</h6>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const formattedDate = formatDateTime(
        new Date(row.original.date)
      ).dateOnly;

      return <p>{formattedDate}</p>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const data = row.original;
      const formattedAmount = formatAmount(data.amount)

      return (
        <div>
          {data.amount > 0 ? (
            <h6 className="flex items-center font-semibold text-[#277C78]">
              <PlusIcon size={13} />
              {formattedAmount}
            </h6>
          ) : (
            <h6 className="text-[#201F24] font-semibold">{formattedAmount}</h6>
          )}
        </div>
      );
    },
  },
];
