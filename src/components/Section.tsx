import FadeGuard from './FadeGuard'

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`min-h-screen flex items-center justify-center ${className}`}>
      <FadeGuard className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-10">
        <div className={`bg-background-card shadow-highlight shadow-accent-subtle p-6`}>
          {children}
        </div>
      </FadeGuard>
    </section>
  );
} 