interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id = '' }: SectionProps) {
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center ${className} transition-colors duration-300`}>
      <div className="w-full max-w-5xl mx-auto py-10 xs:px-10">
        <div className={`bg-background-card shadow-highlight shadow-accent-subtle p-6 transition-colors duration-300`}>
          {children}
        </div>
      </div>
    </section>
  );
} 