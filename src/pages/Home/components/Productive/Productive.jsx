import iconArrow from "../../../../assets/images/icon-arrow.svg";
import stayProductive from "../../../../assets/images/illustration-stay-productive.png";

export default function Productive() {
  return (
    <div className="my-[3rem]">
      <div className="container wrapper">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8">
          <img
            src={stayProductive}
            alt="Stay Productive"
            className="w-[full] lg:w-[50%]"
          />
          <div className="flex flex-col gap-4  w-[full] lg:w-[40%]">
            <h3 className="text-white text-5xl m-0 w-full xl:w-[35rem] font-bold">
              Stay productive, wherever you are
            </h3>
            <p className="text-white w-full xl:w-[38rem] text-xl">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-white w-full xl:w-[38rem] text-xl">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <a href="/" className="flex pb-2 gap-3 items-center text-[#62E0D9] border-b-[1px] border-b-[#62E0D9] w-fit">
              <span>Show how Fylo works</span>
              <img src={iconArrow} alt="arrow" width={25}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
