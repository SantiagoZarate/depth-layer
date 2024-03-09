import type { PropsWithChildren } from "react";

export function HoverEffectWidget({ children }: PropsWithChildren) {
  return (
    <div className="animate-levitate-medium absolute left-[20%] -top-1/3 flex flex-col items-center bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden">
      <p className="text-xs text-text-secondary py-1 px-4 text-center border-b text-border border-border w-full tracking-widest uppercase">
        Hover effect
      </p>
      {children}
    </div>
  );
}
