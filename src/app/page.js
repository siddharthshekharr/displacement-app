import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container py-12">
      <section className="flex flex-col items-center text-center gap-8 py-24">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">
            Create Stunning Displacement Effects
          </h1>
          <p className="text-xl text-muted-foreground">
            Transform your designs with real-time displacement mapping powered by WebGL
          </p>
        </div>

        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/displacement">
              Start Creating
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-24 grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Real-time Preview</h3>
          <p className="text-muted-foreground">
            See your displacement effects update instantly as you adjust parameters
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Professional Results</h3>
          <p className="text-muted-foreground">
            Export high-quality images ready for commercial use
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Cloud Storage</h3>
          <p className="text-muted-foreground">
            Save and access your projects from anywhere
          </p>
        </div>
      </section>
    </div>
  )
}
