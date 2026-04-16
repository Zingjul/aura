import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                    <p className="mt-4 text-zinc-400">Step into the future of digital intelligence. Aura provides the tools you need to stay ahead.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            className="bg-white text-black hover:bg-white/90"
                            size="lg">
                            <Link to="/contact">
                                <span>Get Started</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/5">
                            <Link to="/contact">
                                <span>Book Demo</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
