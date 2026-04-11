"use client";

interface Step {
  id: number;
  label: string;
  icon: React.ReactNode;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export default function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {steps.map((step, i) => {
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <button
            key={step.id}
            onClick={() => onStepClick(step.id)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              isActive
                ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                : isCompleted
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-100"
                : "bg-neutral-50 text-neutral-400 border border-neutral-100 hover:bg-neutral-100 hover:text-neutral-600"
            }`}
          >
            <span className={`flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold ${
              isActive
                ? "bg-indigo-500 text-white"
                : isCompleted
                ? "bg-emerald-500 text-white"
                : "bg-neutral-200 text-neutral-500"
            }`}>
              {isCompleted ? (
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : step.id}
            </span>
            <span className="hidden sm:inline">{step.label}</span>
          </button>
        );
      })}
    </div>
  );
}
