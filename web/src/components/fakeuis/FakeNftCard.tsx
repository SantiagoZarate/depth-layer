export function FakeNftCard() {
  return (
    <div className="w-40 h-40 rounded-xl overflow-hidden bg-red-50 ">
      <span className="absolute right-0 bottom-0 px-4 py-2 text-xs bg-black/80 rounded-tl-3xl">
        <p className="text-green-600 font-bold text-end">Dino NTF</p>
        <p className="text-green-300 text-end">$12.67 USD</p>
      </span>
      <img
        className="w-full h-full object-cover"
        src="https://i.seadn.io/gcs/files/3085b3fc65f00b28699b43efb4434eec.png?auto=format&dpr=1&w=1000"
        alt=""
      />
    </div>
  );
}
