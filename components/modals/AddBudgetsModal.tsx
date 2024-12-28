"use client";

import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { map, z } from "zod";
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
import { colors } from "@/constants";

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

interface ArchiveNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const AddBudgetsModal: React.FC<ArchiveNoteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: "Entertainment",
      maximum_spend: "",
      theme: "#277C78",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Add New Budget"
      description="Choose a category to set a spending budget. These categories can help you monitor spending."
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
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    <SelectItem value="Bills">Bills</SelectItem>
                    <SelectItem value="Groceries">Groceries</SelectItem>
                    <SelectItem value="Dining Out">Dining Out</SelectItem>
                    <SelectItem value="Transportation">
                      Transportation
                    </SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Personal Care">Personal Care</SelectItem>
                    <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="Shopping">Shopping</SelectItem>
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
                  className="h-[45px] block ps-10 border-[#98908B]"
                  placeholder="e.g. 2000"
                />
                <DollarSignIcon
                  color="#696868"
                  size={18}
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
                >
                  <FormControl>
                    <SelectTrigger className="h-[45px] pt-3 ps-12 border-[#98908B]">
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {colors.map((data, index) => (
                        <div key={index} className="flex items-center px-4 gap-1">
                        <div
                          style={{
                            backgroundColor: `${data.value}`,
                          }}
                          className="w-[18px] h-[18px] -mt-0.5 rounded-full"
                        />
                        <SelectItem value={`${data.value}`}>{data.text}</SelectItem>
                      </div>
                    ))}
                    
                    {/* <SelectItem value="#F2CDAC">Yellow</SelectItem>
                    <SelectItem value="#82C9D7">Cyan</SelectItem>
                    <SelectItem value="#626070">Navy</SelectItem>
                    <SelectItem value="#C94736">Red</SelectItem>
                    <SelectItem value="#826CB0">Purple</SelectItem>
                    <SelectItem value="#3F82B2">Blue</SelectItem>
                    <SelectItem value="#934F6F">Magenta</SelectItem>
                    <SelectItem value="#CAB361">Gold</SelectItem>
                    <SelectItem value="#BE6C49">Orange</SelectItem> */}
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
            className="f;ex items-center justify-center w-full py-7 bg-[#201F24]"
            type="submit"
          >
            Add Budget
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default AddBudgetsModal;
