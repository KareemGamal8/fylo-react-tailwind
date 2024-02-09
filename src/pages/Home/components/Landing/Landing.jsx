import curvy from "../../../../assets/images/bg-curvy-desktop.svg";
import illustrationIntro from "../../../../assets/images/illustration-intro.png";

export default function Landing() {
  return (
    <section className="relative">
      <img src={curvy} alt="curvy" className="w-full absolute bottom-0 z-[-1] left-0" />
      <div className="container">
        <div className="flex items-center gap-10 flex-col mt-[8rem] text-center text-white">
          <img src={illustrationIntro} alt="illustrationIntro" />
          <h2 className="text-4xl font-bold w-full sm:w-[40rem]">
            All your files in one secure location, accessible anywhere.
          </h2>
          <p className="text-xl w-full sm:w-[35rem]">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="bg-[#43b2d0] rounded-full w-[15rem] p-3 font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
