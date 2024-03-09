import { CheckIcon } from "../icons/CheckIcon";

export function FakeNotification() {
  return (
    <div className="rounded-xl overflow-hidden bg-stone-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] flex items-center divide-x divide-border">
      <div className="min-w-fit p-4 text-green-500">
        <CheckIcon />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <p className="font-bold text-blue-100">Payment successful</p>
        <p className="text-xs text-blue-400 capitalize">
          thanks for choosing us!
        </p>
      </div>
    </div>
  );
}
