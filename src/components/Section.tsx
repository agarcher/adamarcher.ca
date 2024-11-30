import FadeGuard from './FadeGuard'

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <FadeGuard className="w-full max-w-3xl mx-auto">
        <div className={`bg-background shadow-md p-6 ${className}`}>
          {children}
        </div>
      </FadeGuard>
    </section>
  );
} 