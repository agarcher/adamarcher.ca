import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

export default function SocialLinks() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
          Connect With Me
        </h2>
        <div className="mt-8 flex justify-center space-x-6">
          <a 
            href="https://github.com/agarcher" 
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <GitHubLogoIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/agarcher/" 
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInLogoIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://x.com/agarcher" 
            className="text-muted-foreground hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Twitter</span>
            <TwitterLogoIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

