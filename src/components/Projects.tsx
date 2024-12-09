export default function Projects() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <div className="mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl relative transition-colors duration-300">
          Projects
        </h2>
        <div className="mt-6 space-y-8">
          <div className="group">
            <div className="relative pb-[56.25%] h-0 overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/KoeEPpiDURA"
                title="Super Block Boy & Friends Trailer"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-muted-foreground space-y-4 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <h3 className="text-xl font-bold text-foreground">
                  Super Block Boy & Friends
                </h3>
                <a
                  href="https://omiigames.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/90 transition-colors duration-300"
                >
                  omiigames.com →
                </a>
              </div>
              <p>
                Before I started freelancing I channeled my love of building
                into the launch of an indie game. This game was a collaboration
                with an old friend and has been a ton of fun to work on. It is a
                very hard platformer and is a love letter to retro games from
                the 80s and 90s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
