interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center p-4">
      <div className={`max-w-2xl w-full bg-background shadow-md p-6 ${className}`}>
        {children}
      </div>
    </section>
  );
} 