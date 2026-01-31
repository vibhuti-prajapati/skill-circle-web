import * as Tooltip from "@radix-ui/react-tooltip";

export function IconTooltip({ label, children }) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="right"
            className="z-50  bg-neutral-800 px-2 py-2 rounded-xl border border-gray-700 text-sm font-bold text-neutral-content shadow"
          >
            {label}
            <Tooltip.Arrow className=" bg-neutral-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
