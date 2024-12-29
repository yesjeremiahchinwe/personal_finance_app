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
  FormDescription,
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
import { colors, pots } from "@/constants";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Pot name must be at least 2 characters long.",
  }),
  target: z.string().min(2, {
    message: "Target must be at least 2 characters long.",
  }),
  theme: z.string({
    required_error: "Please select a theme for pot.",
  }),
});

interface AddPotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

const AddNewPot: React.FC<AddPotModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [potNameLength, setPotNameLength] = useState<number>(0);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      target: "",
      theme: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    onConfirm();
  }

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Add New Pot"
      description="Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pot Name</FormLabel>
                <FormControl>
                  <Input
                    className="h-[45px] block ps-4 border-[#98908B]"
                    placeholder="e.g. Rainy Days"
                    onInput={(event) => {
                      setPotNameLength(event.currentTarget.value?.length);
                    }}
                    maxLength={30}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-right">
                  {potNameLength < 30 ? 30 - potNameLength : 0} characters left
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="target"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Target</FormLabel>
                <FormControl>
                  <Input
                    className="h-[45px] block ps-8 border-[#98908B]"
                    placeholder="e.g. 2000"
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
                    setIsOpenSelect(opened);
                  }}
                >
                  <FormControl>
                    <SelectTrigger
                      className={cn(
                        "h-[45px] border-[#98908B]",
                        field.value ? "ps-9" : "ps-4"
                      )}
                    >
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {colors.map((data, index) => (
                      <div
                        key={index}
                        className="relative flex items-center gap-1"
                      >
                        <div
                          style={{
                            backgroundColor: `${data.value}`,
                          }}
                          className="w-[18px] absolute left-4 z-10 top-5 h-[18px] -mt-0.5 rounded-full"
                        />
                        <SelectItem
                          disabled={
                            pots.find((pot) => pot.theme === data.value)
                              ? true
                              : false
                          }
                          value={`${data.value}`}
                          className={cn(
                            "pl-12 py-4 border-b-[#F2F2F2]",
                            field.value === data.text
                              ? "border-none"
                              : "border-b-2"
                          )}
                        >
                          {data.text}
                        </SelectItem>

                        {isOpenSelect &&
                          pots.find((pt) => pt.theme === data.value) && (
                            <span className="absolute top-[18px] right-8 text-[#696868] text-xs">
                              Already used
                            </span>
                          )}
                      </div>
                    ))}
                  </SelectContent>
                </Select>

                <div
                  style={{ backgroundColor: `${field.value?.toLowerCase()}` }}
                  className="w-4 h-4 rounded-full absolute top-[37px] left-3"
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
            Add Pot
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default AddNewPot;
