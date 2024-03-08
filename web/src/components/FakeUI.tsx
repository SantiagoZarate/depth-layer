import { HeartIcon } from "./icons/HeartIcon";

export function FakeUI() {
  return (
    <div className="min-w-[240px] bg-stone-900 rounded-lg min-h-1/3 flex flex-col gap-2 divide-y divide-border">
      <header className="flex items-center gap-4 px-4 py-2">
        <picture className="w-12 h-12 overflow-hidden rounded-full">
          <img
            className="object-cover w-full h-full"
            src="https://cdn.pfps.gg/pfps/1766-silly-cat.png"
            alt=""
          />
        </picture>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-text-accent font-bold">Johny McJohny</p>
          <p className="text-xs text-text-off">Fullstack development</p>
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-green-700" />
            <p className="text-xs capitalize">available</p>
          </div>
        </div>
      </header>
      <div>
        <p className="font-bold text-xs px-2 py-1 capitalize border-b border-border">
          previous activity
        </p>
        <ul>
          {["Facebook", "Amazon", "Apple"].map((n) => (
            <li key={n} className="text-sm px-2 py-1">
              {n}
            </li>
          ))}
        </ul>
      </div>
      <footer className="flex justify-between px-2 py-2 items-center">
        <button className="text-xs rounded-full px-3 py-2 border border-border hover:bg-stone-800 duration-150 transition-colors">
          contact me!
        </button>
        <div className="hover:text-red-600 duration-150 transition-colors cursor-pointer">
          <HeartIcon />
        </div>
      </footer>
    </div>
  );
}
