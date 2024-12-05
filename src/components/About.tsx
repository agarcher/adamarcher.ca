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
            Hi, I'm Adam, and I build really good software.
          </p>
          <p>
            For decades, I've been turning ideas into reality as a software
            engineer. Most of that time was spent at leading tech companies like
            IBM and Shopify, where I gained deep experience in developing
            scalable systems and delivering quality products.
          </p>
          <p>
            At heart, I'm a builder. I produce products that are delightful to
            use and easy to maintain. Whether creating a quick prototype or
            architecting a system for scale, I will bring a pragmatic approach.
            Freelancing allows me to collaborate on meaningful projects while
            maintaining the flexibility to continue exploring personal
            endeavors.
          </p>
          <p>
            If you're looking for an experienced developer with a user-centered
            approach, I'd love to hear from you.
          </p>
        </div>
      </div>
    </div>
  );
}
