export default function About() {
  return (
    <div className="bg-muted py-16 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <div className="mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl relative transition-colors duration-300">
          About
          <img 
            src="/headshot.jpg" 
            alt="Adam Archer" 
            className="xs:w-40 xs:h-40 w-32 h-32 rounded-full absolute top-0 right-0 transform -translate-y-3/4 border-1 border-accent-subtle transition-colors duration-300"
          />
        </h2>
        <div className="mt-6 text-muted-foreground space-y-6 transition-colors duration-300">
          <p>
            With over a decade of experience in software engineering at leading tech companies, 
            I've honed my skills in developing scalable, efficient, and innovative solutions. 
            My background spans from low-level systems programming to high-level web and mobile application development.
          </p>
          <p>
            I'm passionate about tackling complex problems and turning them into elegant, user-friendly solutions. 
            My expertise includes cloud computing, distributed systems, and cutting-edge web technologies.
          </p>
          <p>
            I love working on projects that challenge the status quo and push the boundaries of what's possible in tech. 
            Whether it's optimizing performance-critical systems, architecting robust cloud infrastructures, or creating 
            intuitive user interfaces, I bring a wealth of experience and a fresh perspective to every project.
          </p>
        </div>
      </div>
    </div>
  )
}

