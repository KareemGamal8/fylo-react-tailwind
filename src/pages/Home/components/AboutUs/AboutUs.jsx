import { aboutUsCards } from "../../data";

export default function AboutUs() {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {aboutUsCards.map((card, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-4 flex-col text-white text-center p-8"
              >
                <img src={card.icon} alt={card.title} />
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="w-[26rem] text-gray-300">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
