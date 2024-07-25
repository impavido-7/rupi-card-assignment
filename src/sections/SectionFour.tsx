const SectionFour = () => {
  return (
    <div className="flex md:items-center flex-col-reverse md:flex-row-reverse w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
      <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
        <div className="w-full md:w-[300px] lg:w-[510px]">
          <div>
            <span style={{ fontWeight: 700 }}>
              5x more value than your cashback,
            </span>
            <span style={{ color: "#9EA7AE", fontWeight: 400 }}>
              {" "}
              only at the Uni Store.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
        <div className="flex justify-center overflow-hidden">
          <div className="relative w-[280px] lg:w-[448px]">
            <img src="https://www.uni.cards/images/five_x_rewards.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
