import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="w-full border-t border-white/10 px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-10">
      <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[3px] text-[#c4f82a]">
            What We Believe
          </p>
          <h2 className="max-w-[650px] font-sans text-[30px] font-medium leading-tight md:text-[44px] text-white">
            Clarity creates better marketing.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="font-sans text-[15px] leading-8 text-[#a1a1aa] md:text-[16px]">
            The best marketing doesn't begin with a campaign. It begins
            with understanding your business, your audience, and what
            makes you different.
          </p>

          <p className="font-sans text-[15px] leading-8 text-[#a1a1aa] md:text-[16px]">
            ZIH brings strategy and creativity together to create
            marketing that feels intentional, communicates clearly, and
            supports real business objectives.
          </p>

          <Link
            to="/about"
            className="inline-block border-b border-[#c4f82a] pb-1 font-sans text-[13px] font-semibold text-white transition-colors hover:text-[#c4f82a]"
          >
            More about ZIH
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
