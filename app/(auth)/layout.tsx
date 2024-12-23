import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Personal Finance App",
    template: "%s | Personal Finance App",
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="block w-full">
      <section className="bg-[#211F24] max-xl:flex hidden h-[50px] items-center justify-center rounded-b-xl">
      <div>
          <Image src="/assets/logo.png" alt="Logo" width={100} height={50} />
        </div>
      </section>

      <section className="p-6 flex items-center w-full">
      <div className="basis-[50%] hidden xl:block relative pb-4">
        <Image
          src="/assets/login_illustration.svg"
          alt="Sidebar"
          width={500}
          height={920}
          className="object-cover rounded-2xl"
        />

        <div className="absolute top-7 left-7">
          <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
        </div>

        <div className="absolute bottom-7 left-7 text-white">
          <h3 className="font-bold text-2xl max-w-[90%]">Keep track of your money and save for your future</h3>
          <p className="py-4 text-sm font-light max-w-[90%]">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>

      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="bg-white rounded-2xl w-full mx-auto max-w-[560px] p-8 lg:p-12 min-h-[422px]">
          {children}
        </div>
      </div>
      </section>
    </main>
  );
}
