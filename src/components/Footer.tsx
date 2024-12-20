export default function Footer() {
  return (
    <footer className="footer transition-colors duration-300">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-muted-foreground transition-colors duration-300">
            &copy; {new Date().getFullYear()} Adam Archer Software Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}

