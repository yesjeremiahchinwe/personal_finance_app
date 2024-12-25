"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/actions/user.actions";


const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required.",
  }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at leaest 8 characters long" }),
});

const   SigninForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
        const response = await signIn({
          email: data.email,
          password: data.password
        })

        if (response) {
          router.push("/")
        }

    } catch (error) {
      console.log('Error', error)
    } finally {
      setIsLoading(false)
    }
    setIsLoading(false);
  }


  return (
    <section>
      <h1 className="font-bold text-2xl pb-8">
        Login
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    className={
                      fieldState?.error ? "border-red-500" : "border-[#98908B]"
                    }
                  />
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
                  <FormLabel>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...field}
                      className={
                        fieldState?.error
                          ? "border-red-500"
                          : "border-[#98908B]"
                      }
                    />
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
            disabled={isLoading}
            className="bg-[#211F24] text-sm h-[46px] w-full block"
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>

            <small className="mt-8 flex items-center gap-1 text-center justify-center">
              Need to create an account?{" "}
              <Link href="/sign-up" className="font-semibold">
                Sign Up
              </Link>
            </small>
        </form>
      </Form>
    </section>
  );
};

export default  SigninForm;
