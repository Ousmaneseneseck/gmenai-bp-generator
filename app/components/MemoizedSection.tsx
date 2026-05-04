// app/components/MemoizedSection.tsx
import { memo } from 'react';

interface MemoizedSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const MemoizedSection = memo(({ title, children, icon }: MemoizedSectionProps) => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-8">
          {icon && <div className="text-primary">{icon}</div>}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
});

MemoizedSection.displayName = 'MemoizedSection';
