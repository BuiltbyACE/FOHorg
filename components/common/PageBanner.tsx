import Heading from './Heading';

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10 text-center">
        <Heading as="h1" className="text-white mb-4">
          {title}
        </Heading>
        {subtitle && (
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
