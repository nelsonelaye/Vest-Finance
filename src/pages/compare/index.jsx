import { CColumn, Layout } from "@/components";
import { ColumnData } from "@/components/CColumn/CColumn";

const Compare = () => {
  return (
    <Layout>
      <main className="w-10/12 sm:w-4/5 mx-auto">
        <section className="w-full flex justify-evenly  gap-6 md:justify-center">
          <CColumn />
          <CColumn />
          <CColumn className="hidden md:block" />
        </section>

        <div className="w-full mx-auto border-b-[1px] border-b-[#e8e8ed] pb-5">
          <h2 className="text-2xl font-medium">Stats</h2>
        </div>

        <section className="w-full flex justify-evenly gap-6">
          <ColumnData />
          <ColumnData />
          <ColumnData className="hidden md:block" />
        </section>
      </main>
    </Layout>
  );
};

export default Compare;
