"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { formatAmount } from "@/lib/utils";
import { Modal } from "../ui/modal";
import { DollarSignIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";

interface WithdrawPotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
  name: string;
  total: number;
  target: number;
}

const FormSchema = z.object({
  amount: z.string().min(2, {
    message: "Amount must be at least 2 characters long",
  }),
});

const WithdrawPotModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  name,
  total,
  target,
}: WithdrawPotModalProps) => {
  const [amountInputValue, setAmountInputValue] = useState<string>("");
  const [updatedTotal, setUpdatedTotal] = useState<number>(total);
  const calculateExpensesInPercentage: number =
    parseInt(amountInputValue) && parseInt(amountInputValue) <= total
      ? ((total - parseInt(amountInputValue)) / target) * 100
      : (total / target) * 100;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    onConfirm();
  }

  return (
    <Modal
      title={`Withdraw from '${name}'?`}
      description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="flex items-center justify-between mt-4 w-full">
        <h5 className="text-base font-normal">New Amount</h5>
        <h3 className="text-2xl lg:text-4xl font-semibold">
          {parseInt(amountInputValue) > total
            ? formatAmount(total)
            : formatAmount(updatedTotal)}
        </h3>
      </div>

      <div className="bg-[#F8F4F0] h-[8px] rounded-md w-full mt-6">
        <div
          className="h-[8px] rounded-md"
          style={{
            width: `calc(${
              total >= target ? 100 : calculateExpensesInPercentage
            }%)`,
            backgroundColor: "#C94736",
          }}
        />
      </div>

      <div className="flex items-center justify-between w-full my-4">
        <small className="font-light text-sm text-[#696868]">
          {calculateExpensesInPercentage.toFixed(2)}%
        </small>
        <small className="font-light text-sm text-[#696868]">
          Target of {formatAmount(target)}
        </small>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5 mt-8"
        >
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Amount to Withdraw</FormLabel>
                <FormControl>
                  <Input
                    className="h-[45px] block ps-8 border-[#98908B]"
                    placeholder="e.g. 2000"
                    onInput={(event) => {
                      setAmountInputValue(event.currentTarget.value);
                      setUpdatedTotal(
                        total - (parseInt(event.currentTarget.value) || 0)
                      );
                    }}
                    {...field}
                  />
                </FormControl>
                <DollarSignIcon
                  color="#696868"
                  size={18}
                  className="absolute top-[37px] left-3"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={loading || parseInt(amountInputValue) > total}
            className="flex mt-2 items-center justify-center w-full py-7 bg-[#201F24]"
            type="submit"
          >
            Confirm Withdrawal
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default WithdrawPotModal;
