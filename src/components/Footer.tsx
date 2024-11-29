export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Adam Archer
          </p>
        </div>
      </div>
    </footer>
  )
}
