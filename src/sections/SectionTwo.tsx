const SectionTwo = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-4">
      <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
        <p style={{ opacity: 1, transform: "none" }}>
          Earn 1% assured cashback{" "}
          <span style={{ fontWeight: 400, color: "#9ea7ae" }}>
            on your spends. Get
          </span>{" "}
          5X
        </p>

        <p style={{ opacity: 1, transform: "none" }}>
          more value than cashback{" "}
          <span style={{ fontWeight: 400, color: "#9ea7ae" }}>
            at the Uni Store. Enjoy
          </span>
        </p>

        <p style={{ opacity: 1, transform: "none" }}>
          <span
            className="text-[#9EA7AE]"
            style={{ fontWeight: 400, color: "#9ea7ae" }}
          >
            round the clock
          </span>{" "}
          Whatsapp support.{" "}
          <span
            className="text-[#9EA7AE]"
            style={{ fontWeight: 400, color: "#9ea7ae" }}
          >
            And it's
          </span>
        </p>

        <p style={{ opacity: 1, transform: "none" }}>
          lifetime free
          <span style={{ fontWeight: 400, color: "#9ea7ae" }}>
            ; no joining fee, no annual charges.
          </span>
        </p>
      </div>

      <div
        className="flex md:justify-center py-12"
        style={{ opacity: 1, transform: "none" }}
      >
        <div
          className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center"
          style={{
            background:
              "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 90.28%)",
          }}
        >
          <img
            alt="down"
            src="	https://www.uni.cards/images/down_arrow.svg"
            className="w-9 md:w-14"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
