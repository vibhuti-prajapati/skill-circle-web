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
            className="z-50 rounded-md bg-neutral px-2 py-1 text-sm text-neutral-content shadow"
          >
            {label}
            <Tooltip.Arrow className="fill-neutral" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
