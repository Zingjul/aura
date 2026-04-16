import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'

export default function NewsletterCTA() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Stay Connected</h2>
                    <p className="mt-4 text-zinc-400">Join our newsletter to receive the latest updates on Aura intelligence.</p>

                    <form
                        action=""
                        onSubmit={(e) => e.preventDefault()}
                        className="mx-auto mt-10 max-w-sm lg:mt-12">
                        <div className="bg-white/5 backdrop-blur-sm has-[input:focus]:ring-white/20 relative grid grid-cols-[1fr_auto] items-center rounded-2xl border border-white/10 pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 transition-all">
                            <Mail className="text-zinc-500 pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                            <input
                                placeholder="Your mail address"
                                className="h-14 w-full bg-transparent pl-12 focus:outline-none text-white placeholder:text-zinc-500"
                                type="email"
                            />

                            <div className="md:pr-1.5 lg:pr-0">
                                <Button
                                    aria-label="submit"
                                    className="rounded-xl bg-white text-black hover:bg-white/90">
                                    <span className="hidden md:block">Subscribe</span>
                                    <SendHorizonal
                                        className="relative mx-auto size-5 md:hidden"
                                        strokeWidth={2}
                                    />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
