"use client";

import { formatAmount } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { CheckCircle, InfoIcon } from "lucide-react";
import Image from "next/image";

export type BillColumnType = {
  id: string;
  billTitle: string;
  avatar: string;
  name: string;
  date: string;
  amount: number;
  status: string;
};

export const columns: ColumnDef<BillColumnType>[] = [
  {
    accessorKey: "billTitle",
    header: "Bill Title",
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
    accessorKey: "date",
    header: "Due Date",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <div>
          {data.status === "paid" ? (
            <span className="text-[#277C78] flex items-center gap-2 lg:gap-3">
              {data.date} <CheckCircle color="#277C78" size={14} className="max-sm:hidden" />
            </span>
          ) : data.status === "overdue" ? (
            <span className="text-[#696868] flex items-center gap-2 lg:gap-3">
              {data.date} <InfoIcon color="#C94736" size={14} className="max-sm:hidden" />
            </span>
          ) : (
            <span className="text-[#696868]">{data.date}</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const data = row.original;
      const formattedAmount = formatAmount(data.amount);

      return (
        <div>
          {data.status === "overdue" ? (
            <span className="text-[#C94736] text-base font-bold">{formattedAmount}</span>
          ) : (
            <span className="text-[#201F24] text-base font-bold">{formattedAmount}</span>
          )}
        </div>
      );
    },
  },
];
