import { eventThemes, type EventThemeKey } from "@/lib/eventThemes";

interface EventHeroProps {
  slug: EventThemeKey;
  title: string;
  subtitle: string;
  imageUrl?: string;
  date?: string;
  time?: string;
  location?: string;
}

export const EventHero = ({
  slug,
  title,
  subtitle,
  imageUrl,
  date,
  time,
  location,
}: EventHeroProps) => {
  const theme = eventThemes[slug];

  return (
    <section className="relative overflow-hidden pt-20 md:pt-24 pb-0 text-white">
      {/* LAYER 0: Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${theme.bannerBackground}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* LAYER 1: Textile Texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: theme.texture,
          backgroundBlendMode: 'overlay',
        }}
      />

      {/* LAYER 2: Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${theme.bannerGradient}`} />

      {/* LAYER 3: Noise overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-overlay bg-[url('/noise.png')]" />

      {/* CONTENT CONTAINER WITH PADDING */}
      <div className="relative min-h-[450px] md:min-h-[550px] flex items-center">
        {/* Inner container with padding */}
        <div className="w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 w-full">
            
            {/* LEFT: Text Content */}
            <div className="flex-1 flex items-center justify-start z-10">
              <div className="max-w-2xl">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight text-white drop-shadow-lg">
                  {title}
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-white/95 mb-6 leading-relaxed drop-shadow max-w-xl">
                  {subtitle}
                </p>

                {/* Date/Time/Location chips - CONTROLLED BY THEME.SHOWMETA */}
                {theme.showMeta && (date || time || location) && (
                  <div className="flex flex-wrap gap-3 mt-6">
                    {date && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white/95 text-sm font-medium shadow-lg">
                        📅 {date}
                      </div>
                    )}
                    {time && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white/95 text-sm font-medium shadow-lg">
                        🕒 {time}
                      </div>
                    )}
                    {location && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white/95 text-sm font-medium shadow-lg">
                        📍 {location}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT: Event Image - LARGER SIZE */}
            {imageUrl && (
              <div className="hidden md:flex flex-1 items-end justify-end z-10">
                {/* Image wrapper - INCREASED HEIGHT: h-[450px] */}
                <div className="relative w-full h-[450px] -mb-0.5">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-contain object-bottom"
                    style={{
                      filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.2))',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile image (below banner on mobile) */}
      {imageUrl && (
        <div className="md:hidden relative w-full h-80 z-10 px-4">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.2))',
            }}
          />
        </div>
      )}
    </section>
  );
};

export default EventHero;
