"use client";

import AddToPotModal from "@/components/modals/AddToPotModal";
import DeletePotModal from "@/components/modals/DeletePotModal";
import EditPot from "@/components/modals/EditPot";
import WithdrawPotModal from "@/components/modals/WithdrawModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatAmount } from "@/lib/utils";
import { MoreHorizontal, PlusIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  name: string;
  target: number;
  total: number;
  theme: string;
}

const Pot = ({ name, target, total, theme }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenWithdrawModal, setIsOpenWithdrawModal] = useState(false);
  const [isOpenAddToPot, setIsOpenAddToPot] = useState(false);
  const calculateExpensesInPercentage: number = (total / target) * 100;

  return (
    <>
      <section className="min-h-[303px] bg-white rounded-xl py-8 px-6 xl:px-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: `${theme}` }}
            />
            <h4 className="text-xl font-semibold text-[#201F24]">{name}</h4>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal color="#B3B3B3" />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="px-4 py-3">
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                Edit Pot
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-[#C94736] hover:bg-transparent cursor-pointer"
                onClick={() => setIsOpenDeleteModal((prev) => !prev)}
              >
                Delete Pot
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center justify-between mt-10 w-full">
          <h5 className="text-base font-semibold">Total Saved</h5>
          <h3 className="text-2xl lg:text-4xl font-semibold">
            {formatAmount(total)}
          </h3>
        </div>

        <div className="bg-[#F8F4F0] h-[8px] rounded-md w-full mt-6">
          <div
            className="h-[8px] rounded-md duration-500 transition-[width]"
            style={{
              width: `calc(${
                total >= target ? 100 : calculateExpensesInPercentage
              }%)`,
              backgroundColor: `${theme}`,
            }}
          />
        </div>

        <div className="flex items-center justify-between w-full my-4">
          <small className="font-light text-sm text-[#696868]">
            {calculateExpensesInPercentage.toFixed(1)}%
          </small>
          <small className="font-light text-sm text-[#696868]">
            Target of {formatAmount(target)}
          </small>
        </div>

        <div className="flex items-center justify-between gap-3 w-full mt-10">
          <Button className="flex-grow py-7 bg-[#F8F4F0] hover:bg-[#F8F4F0] text-[#201F24] font-semibold text-base shadow-none" onClick={() => setIsOpenAddToPot((prev) => !prev)}>
            <PlusIcon color="#000" size={14} /> Add Money
          </Button>
          <Button
            className="flex-grow py-7 bg-[#F8F4F0] hover:bg-[#F8F4F0] text-[#201F24] font-semibold text-base shadow-none"
            onClick={() => setIsOpenWithdrawModal((prev) => !prev)}
          >
            Withdraw
          </Button>
        </div>
      </section>

      <EditPot
        isOpen={isOpen}
        loading={false}
        onClose={() => setIsOpen((prev) => !prev)}
        onConfirm={() => setIsOpen((prev) => !prev)}
        name={name}
        target={target}
        theme={theme}
      />

      <WithdrawPotModal
        isOpen={isOpenWithdrawModal}
        loading={false}
        onClose={() => setIsOpenWithdrawModal((prev) => !prev)}
        onConfirm={() => setIsOpenWithdrawModal((prev) => !prev)}
        name={name}
        total={total}
        target={target}
      />

      <AddToPotModal
        isOpen={isOpenAddToPot}
        loading={false}
        onClose={() => setIsOpenAddToPot((prev) => !prev)}
        onConfirm={() => setIsOpenAddToPot((prev) => !prev)}
        name={name}
        total={total}
        target={target}
      />

      <DeletePotModal
        isOpen={isOpenDeleteModal}
        loading={false}
        onClose={() => setIsOpenDeleteModal((prev) => !prev)}
        onConfirm={() => setIsOpenDeleteModal((prev) => !prev)}
        name={name}
      />
    </>
  );
};

export default Pot;
