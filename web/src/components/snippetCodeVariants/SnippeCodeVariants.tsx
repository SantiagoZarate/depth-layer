import { useState } from "react"
import { IntelisenseIcon } from "./IntelisenseIcon"
import { DepthLayer } from "../DepthLayer";

const variants = ['top', 'topLeft', 'topRight'] as const
type Variant = typeof variants[number];

export function SnippetCodeVariants() {
  const [currentVariant, setCurrentVariant] = useState<Variant>(variants[0]);

  const handleChangeVariant = (index: number) => {
    setCurrentVariant(variants[index])
  }

  return (
    <DepthLayer lightDirection={currentVariant} opacity={'medium'}>
      <div className=" w-full px-4 py-12 bg-zinc-900">
        <ul className="absolute w-full animate-levitate left-[45%] top-[45%] bg-zinc-900 max-w-80 shadow-lg text-sm rounded-md overflow-hidden border border-border flex flex-col">
          {
            variants.map((variant, index) => (
              <li
                key={index}
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
            &lt;<span className="text-emerald-500">DepthLayer</span><span className="text-blue-300"> lightDirection</span>=<span className="text-blue-500">&#123;</span><span className="text-orange-500">''</span><span className="text-blue-500">&#125;</span> /&gt;
          </div>
          <div className="mx-4">
            &lt;<span className="text-blue-500">button</span>&gt;<span className="text-white/80">Press me!</span>&lt;/<span className="text-blue-500">button</span>&gt;
          </div>
          <div>
            &lt;/<span className="text-emerald-500">DepthLayer</span>&gt;
          </div>
        </div>
      </div>
    </DepthLayer>
  )
}

// BUG : Cuando el elemnto children del depthLayer tiene el atributo de relative, los estilos no se aplican