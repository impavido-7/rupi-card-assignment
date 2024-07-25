import Header from "./sections/Header";
import SectionFive from "./sections/SectionFive";
import SectionFour from "./sections/SectionFour";
import SectionOne from "./sections/SectionOne";
import SectionSix from "./sections/SectionsSix";
import SectionThree from "./sections/SectionThree";
import SectionTwo from "./sections/SectionTwo";

const App = () => {
  return (
    <>
      <Header />
      <SectionOne />

      <div className="py-12 md:py-[150px]">
        <section>
          <SectionTwo />
        </section>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-4 px-8">
          <div className="flex justify-center flex-col">
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
