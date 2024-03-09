import { companies } from "../../constants";
import { HeartIcon } from "../icons/HeartIcon";

export function FakeUI() {
  return (
    <div className="min-w-[260px] bg-stone-800 rounded-lg min-h-1/3 flex flex-col gap-2 divide-y divide-border">
      <header className="flex items-center gap-4 px-4 py-3">
        <picture className="w-12 h-12 overflow-hidden rounded-full border-2 border-border">
          <img
            draggable={false}
            className="object-cover w-full h-full"
            src="https://i.pinimg.com/736x/85/9a/f7/859af748d1eed0d67d5801a6df188a89.jpg"
            alt=""
          />
        </picture>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-text-accent font-bold">Johny McJohny</p>
          <p className="text-xs text-text-off capitalize">
            Fullstack developer
          </p>
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-green-700" />
            <p className="text-xs capitalize text-text-accent">available</p>
          </div>
        </div>
      </header>
      <div>
        <p className="text-xs px-2 py-1 capitalize border-b border-border tracking-wider text-text-active">
          previous activity
        </p>
        <ul>
          {companies.map((n) => (
            <li
              key={n.name}
              className="px-2 py-1 flex  items-center justify-between text-text-off"
            >
              <p className="text-sm">{n.name}</p>
              <span className="text-xs">{n.years} years</span>
            </li>
          ))}
        </ul>
      </div>
      <footer className="flex justify-between px-2 py-2 items-center">
        <button className="text-xs rounded-full px-3 py-2 border border-border uppercase font-bold hover:bg-green-800 duration-150 transition-colors">
          contact me!
        </button>
        <div className="hover:text-red-600 duration-150 transition-colors cursor-pointer">
          <HeartIcon />
        </div>
      </footer>
    </div>
  );
}
