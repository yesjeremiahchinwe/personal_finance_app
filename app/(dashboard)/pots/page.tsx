import { pots } from "@/constants";
import { Metadata } from "next";
import Pot from "./components/Pot";

export const metadata: Metadata = {
  title: "Pots",
  description: "View all your pots in one place",
};

const PotsPage = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 gap-6 lg:grid-cols-2 w-full">
      {pots.map((pot, index) => (
        <Pot key={index} {...pot} />
      ))}
    </section>
  )
};

export default PotsPage;
