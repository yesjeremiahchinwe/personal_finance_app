"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required.",
  }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at leaest 8 characters long" }),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section>
      <h1 className="font-bold text-2xl pb-8">Login</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} className={fieldState?.error ? "border-red-500" : "border-[#98908B]"} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="relative">
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type={showPassword ? "text" : "password"} {...field} className={fieldState?.error ? "border-red-500" : "border-[#98908B]"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <EyeIcon
              onClick={() => setShowPassword((prev) => !prev)}
              size={18}
              className={`absolute top-[42px] right-4 cursor-pointer ${
                !showPassword ? "block" : "hidden"
              }`}
            />

            <EyeOffIcon
              onClick={() => setShowPassword((prev) => !prev)}
              size={18}
              className={`absolute top-[42px] right-4 cursor-pointer ${
                showPassword ? "block" : "hidden"
              }`}
            />
          </div>

          <Button
            type="submit"
            className="bg-[#211F24] text-sm h-[46px] w-full block"
          >
            Login
          </Button>

          <small className="mt-8 flex items-center gap-1 text-center justify-center">
            Need to create an account?<Link href="/signup" className="font-semibold">
              Sign Up
            </Link>
          </small>
        </form>
      </Form>
    </section>
  );
};

export default LoginPage;
