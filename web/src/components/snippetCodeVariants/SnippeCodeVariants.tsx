import { useState } from "react"
import { IntelisenseIcon } from "./IntelisenseIcon"

const variants = [
  'top',
  'topLeft',
  'topRight'
]

export function SnippetCodeVariants() {
  const [currentVariant, setCurrentVariant] = useState(variants[0]);

  const handleChangeVariant = (index: number) => {
    setCurrentVariant(variants[index])
  }

  const code = `
  const add = (a, b) => {
    return a + b;
  }
`;

  return (
    <div className="animate-bounce relative w-full px-4 py-12 bg-zinc-900 ">
      <ul className="absolute w-full left-[45%] top-[45%] bg-zinc-900 max-w-80 shadow-lg text-sm rounded-md overflow-hidden border border-border flex flex-col">
        {
          variants.map((variant, index) => (
            <li
              onClick={() => handleChangeVariant(index)}
              className={`${variant === currentVariant ? "bg-blue-600/40" : "hover:bg-white/10"} font-mono tracking-wide cursor-pointer  px-1 py-[2px] flex justify-between items-center `}>
              <div className="flex gap-2 items-center">
                <IntelisenseIcon />
                {variant}
              </div>
              {
                (variant === currentVariant) &&
                <span className="text-xs self-end opacity-45">
                  {variant}
                </span>
              }
            </li>
          ))
        }
      </ul>
      <div className="flex flex-col text-white/50 font-mono">
        <div>
          &lt;<span className="text-emerald-500">DepthLayer</span><span className="text-blue-300"> lightDirection=&#123;''&#125; </span>/&gt;
        </div>
        <div className="mx-4">
          &lt;<span className="text-blue-500">button</span>&gt;<span className="text-white/80">Press me!</span>&lt;/<span className="text-blue-500">button</span>&gt;
        </div>
        <div>
          &lt;/<span className="text-emerald-500">DepthLayer</span>&gt;
        </div>
      </div>
    </div>
  )
}