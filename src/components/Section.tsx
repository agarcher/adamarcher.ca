import FadeGuard from './FadeGuard'

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <FadeGuard className="w-full max-w-3xl mx-auto">
        <div className={`bg-background-card shadow-md p-6 ${className}`}>
          {children}
        </div>
      </FadeGuard>
    </section>
  );
} 