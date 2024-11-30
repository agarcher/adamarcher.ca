import FadeGuard from './FadeGuard'

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id = '' }: SectionProps) {
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center ${className}`}>
      <FadeGuard className="w-full max-w-3xl mx-auto py-10 xs:px-10">
        <div className={`bg-background-card shadow-highlight shadow-accent-subtle p-6`}>
          {children}
        </div>
      </FadeGuard>
    </section>
  );
} 