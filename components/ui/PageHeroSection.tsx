import { forwardRef, type ComponentPropsWithoutRef } from "react";

interface PageHeroSectionProps extends ComponentPropsWithoutRef<"section"> {
  className?: string;
}

const PageHeroSection = forwardRef<HTMLElement, PageHeroSectionProps>(
  ({ className = "", children, ...props }, ref) => {
    const combinedClassName = [
      "relative w-full h-screen bg-genesis-navy",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <section ref={ref} className={combinedClassName} {...props}>
        {children}
      </section>
    );
  },
);

PageHeroSection.displayName = "PageHeroSection";

export default PageHeroSection;
