import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description: "View all your dashboard activities in one place"
};

const OverviewPage = () => {
  return (
    <div className="[family-name:var(--font-geist-sans)]">
      <h1>My Page</h1>
    </div>
  );
}

export default OverviewPage