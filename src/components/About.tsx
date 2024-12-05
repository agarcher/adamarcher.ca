export default function About() {
  return (
    <div className="bg-muted py-16 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <div className="mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl relative transition-colors duration-300">
          About
          <img
            src="/headshot.jpg"
            alt="Adam Archer"
            className="xs:w-40 xs:h-40 w-32 h-32 rounded-full absolute top-0 right-0 md:right-10 xl:right-30 transform -translate-y-3/4 border-1 border-accent-subtle transition-colors duration-300"
          />
        </h2>
        <div className="mt-6 text-muted-foreground space-y-6 transition-colors duration-300">
          <p className="font-bold">
            Hi, I'm Adam, and I build software that works.
          </p>
          <p>
            For decades, I've been turning ideas into reality as a software
            engineer. Most of that time was spent at leading tech companies like
            IBM and Shopify, where I gained deep experience in developing
            scalable systems and delivering quality products.
          </p>
          <p>
            At heart, I'm a creator. Whether it's designing systems from scratch
            or refining the details that make a user's experience seamless, I
            build products that are delightful to use and easy to maintain.
            Recently, I channeled this passion into building an indie game with
            a friend, blending creativity and technical expertise into a project
            I'm proud to share.
          </p>
          <p>
            Freelancing allows me to collaborate on a wide variety of meaningful
            projects while maintaining the flexibility to continue exploring
            personal endeavors. I enjoy working with teams to solve unique
            challenges, balancing speed and pragmatism with thoughtful
            architectural decisions when needed.
          </p>
          <p>
            My approach to software is about impact — crafting intuitive
            designs, delivering strong user experiences, and building systems
            tailored to the needs of the project. Whether it's shipping a
            startup's MVP quickly and efficiently or designing for long-term
            scalability, I bring a balanced, practical mindset to every
            challenge. If you're looking for an experienced developer with a
            user-centered approach, I'd love to connect.
          </p>
        </div>
      </div>
    </div>
  );
}
