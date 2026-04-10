import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button2'

const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-6 sm:gap-8 md:gap-24 flex-1 pt-5 sm:pt-6 md:pt-20 pb-8 sm:pb-30 overflow-hidden">
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 md:justify-center">
        <h3 className="about-heading text-[clamp(1.5rem,4.6vw,3rem)] text-genesis-navy leading-[1.12] font-[PPFONT]">
          Portfolio Overview
        </h3>

        <p
          id="animated-paragraph"
          className="text-sm sm:text-base text-gray-600 font-poppins leading-8 max-w-2xl"
        >
          An in-depth snapshot of our global portfolio, showcasing companies across various stages, industries, and regions. This overview highlights operational progress, innovation milestones, and the collective impact of our investments across 12 countries.
        </p>

        <Link href="/About">
          <Button
            variant="primary"
            size="md"
            className="mt-12 bg-genesis-navy px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white hover:bg-genesis-navy/80 transition-colors"
          >
            <span className="inline-flex items-center gap-3">DOWNLOAD PDF</span>
          </Button>
        </Link>
      </div>
      <div className="relative w-full md:w-1/2 h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Image
          src="/images/relations/portfolio.png"
          alt="About us"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default Portfolio