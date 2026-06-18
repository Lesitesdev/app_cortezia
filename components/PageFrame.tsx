import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Feature = {
  title: string;
  text: string;
};

type PageFrameProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  features?: Feature[];
  children?: React.ReactNode;
};

export default function PageFrame({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  features = [],
  children,
}: PageFrameProps) {
  return (
    <>
      <Header />

      <main className="pt-28 bg-[#f7f3f0] min-h-screen">
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="max-w-3xl">
            {eyebrow && (
              <span className="text-rose-500 font-semibold">{eyebrow}</span>
            )}

            <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mt-4 leading-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-stone-600 mt-6 leading-8">
              {description}
            </p>

            {(primaryHref || secondaryHref) && (
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {primaryHref && primaryLabel && (
                  <Link
                    href={primaryHref}
                    className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-medium transition inline-flex items-center justify-center"
                  >
                    {primaryLabel}
                  </Link>
                )}

                {secondaryHref && secondaryLabel && (
                  <Link
                    href={secondaryHref}
                    className="border border-stone-300 hover:bg-white px-8 py-4 rounded-full font-medium transition inline-flex items-center justify-center"
                  >
                    {secondaryLabel}
                  </Link>
                )}
              </div>
            )}
          </div>

          {features.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mt-14">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="bg-white rounded-3xl p-7 border border-stone-100 shadow-sm"
                >
                  <h2 className="text-xl font-bold text-stone-900">
                    {feature.title}
                  </h2>
                  <p className="text-stone-600 mt-3 leading-7">{feature.text}</p>
                </article>
              ))}
            </div>
          )}

          {children}
        </section>
      </main>

      <Footer />
    </>
  );
}
