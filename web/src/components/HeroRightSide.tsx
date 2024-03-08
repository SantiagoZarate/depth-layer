import { BooleanSlide } from "./BooleanSlider";
import { DepthLayer } from "./DepthLayer";
import { FakeUI } from "./FakeUI";

export function HeroRightSide() {
  return (
    <article className="relative flex-1 w-full h-full flex justify-center">
      <DepthLayer>
        <FakeUI />
      </DepthLayer>
      <div className="animate-levitate absolute left-[10%] -bottom-1/2 flex flex-col items-center bg-black/50 rounded-2xl overflow-hidden">
        <p className="text-xs py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
          light direction
        </p>
        <ul className="flex flex-col gap-1 p-1 w-full">
          <button className="px-6 py-2 text-xs capitalize w-full hover:bg-black/80 duration-150 transition rounded-full">
            top
          </button>
          <button className="px-6 py-2 text-xs capitalize w-full hover:bg-black/80 duration-150 transition rounded-full">
            top left
          </button>
          <button className="px-6 py-2 text-xs capitalize w-full hover:bg-black/80 duration-150 transition rounded-full">
            top right
          </button>
        </ul>
      </div>
      <div className="animate-levitate-medium absolute left-[30%] -top-1/2 flex flex-col items-center bg-black/50 rounded-2xl overflow-hidden">
        <p className="text-xs py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
          Hover effect
        </p>
        <BooleanSlide />
      </div>
      <div className="animate-levitate-slow absolute right-[10%] bottom-12 flex flex-col items-center bg-black/50 rounded-2xl overflow-hidden">
        <p className="text-xs py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
          Hover effect
        </p>
        <div className="px-2">
          <input
            className="py-2 min-w-[0px] accent-stone-600"
            min={0}
            max={100}
            type="range"
          />
        </div>
      </div>
    </article>
  );
}
