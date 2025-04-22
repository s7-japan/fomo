export default function FomoBettingCard() {
  return (
    <div className="bg-black w-80 font-sans text-white rounded-lg relative m-20">
      <div className="bg-pink-600 p-4 pl-16 relative overflow-visible">
        <div
          className="absolute -top-10 -left-2 text-pink-500 text-6xl font-extrabold z-10"
          style={{ WebkitTextStroke: "2px black" }}
        >
          1
        </div>
        <h2 className="text-white font-bold text-lg leading-snug">
          FOMO-Exclu
          <br />
          FOMO-Exclusive
          <br />
          Betting Event
        </h2>
      </div>
      <div className="bg-zinc-900 p-4 text-sm space-y-4">
        <ul className="list-disc list-inside space-y-2">
          <li>Bet on special odds and formats only available on FOMO</li>
          <li>Participate in limited competitions and earn real prizes</li>
        </ul>
      </div>
    </div>
  );
}
