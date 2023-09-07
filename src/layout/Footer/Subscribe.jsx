export default function Subscribe() {
  return (
    <div className="w-[80%] shadow-xl rounded-lg mx-auto mt-[-8rem] mb-10 bg-[#181F2B] py-[2.5rem] px-[1rem] lg:px-[12.5rem]  flex flex-col gap-8 items-center text-white text-center">
      <h3 className="text-4xl font-semibold">Get early access today</h3>
      <p className="text-gray-300 text-xl">
        It only takes one minute to sign up and our free starter tiers extremely
        generous. If you have any questions, our support team will be happy to
        support you.
      </p>
      <form className="w-full flex items-center gap-8 flex-col lg:flex-row">
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          className="w-full lg:w-[70%] rounded-[2rem] py-4 px-6 text-black border-none focus-visible:border-none"
        />
        <button
          className="w-full lg:w-[30%] rounded-[2rem] bg-[#62E0D9] py-4 font-bold"
          type="submit"
        >
          Get started for free
        </button>
      </form>
    </div>
  );
}
