"use client";

import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { DollarSignIcon } from "lucide-react";
import { budgets, categories, colors } from "@/constants";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  category: z.string({
    required_error: "Please select category for budget.",
  }),
  maximum_spend: z.string({
    required_error: "Please select your maximum spend.",
  }),
  theme: z.string({
    required_error: "Please select a theme for budget.",
  }),
});

interface EditBudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
  category: string,
  maximum: number,
  theme: string
}

const EditBudgetsModal: React.FC<EditBudgetModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  category,
  maximum,
  theme
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpenSelect, setIsOpenSelect] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: category,
      maximum_spend: maximum.toString(),
      theme: theme,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    onConfirm()
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Edit Budget"
      description="As your budgets change, feel free to update your spending limits."
      isOpen={isOpen}
      onClose={onClose}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-[45px] border-[#98908B]">
                      <SelectValue placeholder="Select budget category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((data, index) => (
                      <SelectItem key={index} value={data.text} className={cn("py-4 border-b-[#F2F2F2]", field.value === data.text ? "border-none" : "border-b-2")}>
                        {data.text}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="maximum_spend"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Maximum Spend</FormLabel>
                <Input
                  className="h-[45px] block ps-8 border-[#98908B]"
                  placeholder="e.g. 2000"
                  defaultValue={field.value}
                />
                <DollarSignIcon
                  color="#696868"
                  size={16}
                  className="absolute top-[37px] left-3"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="theme"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Theme</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  onOpenChange={(opened) => {
                    setIsOpenSelect(opened)
                  }}
                >
                  <FormControl>
                    <SelectTrigger className="h-[45px] ps-10 border-[#98908B]">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {colors.map((data, index) => (
                      <div key={index} className="relative flex items-center gap-1">
                        <div
                          style={{
                            backgroundColor: `${data.value}`,
                          }}
                          className="w-[18px] absolute left-4 z-10 top-5 h-[18px] -mt-0.5 rounded-full"
                        />
                        <SelectItem disabled={budgets.find(budget => budget.theme === data.value) ? true : false } value={`${data.value}`} className={cn("pl-12 py-4 border-b-[#F2F2F2]", field.value === data.text ? "border-none" : "border-b-2")}>
                          {data.text}
                        </SelectItem>

                        {isOpenSelect && budgets.find(budget => budget.theme === data.value) && (
                          <span className="absolute top-[18px] text-xs right-8 text-[#696868]">Already used</span>
                        )}
                      </div>
                    ))}
                  </SelectContent>
                </Select>

                <div
                  style={{ backgroundColor: `${field.value?.toLowerCase()}` }}
                  className="w-5 h-5 rounded-full absolute top-[37px] left-3"
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
          disabled={loading}
            className="f;ex items-center justify-center w-full py-7 bg-[#201F24]"
            type="submit"
          >
            {loading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default EditBudgetsModal;
