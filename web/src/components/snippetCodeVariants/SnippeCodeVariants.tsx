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

  return (
    <div className="w-full px-4 py-12 bg-zinc-900">
      <ul className="max-w-80 text-sm rounded-md overflow-hidden border border-border flex flex-col">
        {
          variants.map((variant, index) => (
            <li
              onClick={() => handleChangeVariant(index)}
              className={`${variant === currentVariant ? "bg-blue-600/40" : "hover:bg-white/10"} cursor-pointer  px-1 py-[2px] flex justify-between items-center `}>
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
    </div>
  )
}