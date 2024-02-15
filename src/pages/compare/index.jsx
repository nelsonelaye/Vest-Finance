import { CColumn, Layout } from "@/components";
// import ColumnData from "@/components/CColumn/ColumnData";

const Compare = () => {
  return (
    <div className=" w-full z-10">
      <Layout>
        <main className=" w-10/12 sm:w-4/5 mx-auto">
          <div className="text-center my-10 mb-20">
            <h2 className="w-full text-2xl md:text-5xl font-semibold  lg:w-1/2 mx-auto mb-1 md:mb-4">
              Compare between stock metrics and ratios
            </h2>
            <span className="text-black-50">
              Decide on what to invest in faster.
            </span>
          </div>
          <section className="w-full flex justify-evenly  gap-6 md:justify-center md:gap-0">
            <CColumn />
            <CColumn />
            <CColumn className="hidden md:block" />
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default Compare;
