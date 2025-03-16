interface ScrollIndicatorProps {
  stages: { id: string; title: string }[];
  activeStage: string;
}

export function ScrollIndicator({ stages, activeStage }: ScrollIndicatorProps) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
      {stages.map((stage) => (
        <a
          key={stage.id}
          href={`#${stage.id}`}
          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
            activeStage === stage.id
              ? 'bg-white'
              : 'bg-white/30 hover:bg-white/50'
          }`}
          title={stage.title}
        />
      ))}
    </div>
  );
}
