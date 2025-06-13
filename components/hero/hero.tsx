import Container from "../shared/container"

export default function Hero() {
  return (
    <div className="h-[60dvh]" style={{ backgroundImage: `url('/images/assets/bg2.png')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="h-full bg-gradient-to-r from-yellow-500 via-yellow-500/90 to-yellow-500/40 dark:from-background dark:via-background/80 dark:to-background/70">
        <Container className="h-full">
          <div className="flex flex-col items-start justify-center h-full w-2/4 space-y-4">
            <h1 className="font-semibold text-5xl">Simple, <span className="dark:text-yellow-500">Affordable </span>Development</h1>
            <p>I am a full-stack developer and I build custom web applications using NextJS. If you have a project you would like me to work on, please get in touch.</p>
          </div>
        </Container>
      </div>
    </div>
  )
}

