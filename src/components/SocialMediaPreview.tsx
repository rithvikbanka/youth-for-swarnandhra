import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

interface SocialPost {
  url: string;
  platform: "instagram" | "twitter" | "x";
  title?: string;
  description?: string;
  imageUrl?: string;
}

interface SocialMediaPreviewProps {
  urls: string[];
  title?: string;
}

// Helper to detect platform from URL
const detectPlatform = (url: string): "instagram" | "twitter" | "x" => {
  if (url.includes("instagram.com")) return "instagram";
  if (url.includes("twitter.com") || url.includes("x.com")) return "x";
  return "instagram";
};

// Helper to get platform display name
const getPlatformName = (platform: "instagram" | "twitter" | "x") => {
  switch (platform) {
    case "instagram":
      return "Instagram";
    case "twitter":
    case "x":
      return "X (Twitter)";
    default:
      return "Social Media";
  }
};

// Helper to get platform colors
const getPlatformColors = (platform: "instagram" | "twitter" | "x") => {
  switch (platform) {
    case "instagram":
      return {
        bg: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
        text: "text-white",
        hover: "hover:from-purple-700 hover:via-pink-600 hover:to-orange-500",
      };
    case "twitter":
    case "x":
      return {
        bg: "bg-black",
        text: "text-white",
        hover: "hover:bg-gray-900",
      };
    default:
      return {
        bg: "bg-primary",
        text: "text-white",
        hover: "hover:bg-primary/90",
      };
  }
};

const SocialPostCard = ({ post, index }: { post: SocialPost; index: number }) => {
  const colors = getPlatformColors(post.platform);

  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group block"
    >
      <div className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
        {/* Platform Header */}
        <div className={`${colors.bg} ${colors.hover} p-4 transition-colors duration-300`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {post.platform === "instagram" ? (
                <Instagram className={`w-5 h-5 ${colors.text}`} />
              ) : (
                <svg className={`w-5 h-5 ${colors.text}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              )}
              <span className={`text-sm font-semibold ${colors.text}`}>
                {getPlatformName(post.platform)}
              </span>
            </div>
            <ExternalLink className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
          </div>
        </div>

        {/* Preview Image (placeholder) */}
        <div className="aspect-square bg-gradient-to-br from-festival-offwhite to-muted flex items-center justify-center relative overflow-hidden">
          {post.imageUrl ? (
            <img 
              src={post.imageUrl} 
              alt={post.title || "Social media post"} 
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-6">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${colors.bg} flex items-center justify-center`}>
                {post.platform === "instagram" ? (
                  <Instagram className="w-8 h-8 text-white" />
                ) : (
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Click to view post
              </p>
            </div>
          )}
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <motion.div
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <ExternalLink className="w-6 h-6 text-foreground" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {post.title && (
            <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
              {post.title}
            </h4>
          )}
          {post.description && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {post.description}
            </p>
          )}
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block px-2 py-1 bg-muted rounded-full">
              View on {getPlatformName(post.platform)}
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export const SocialMediaPreview = ({ urls, title }: SocialMediaPreviewProps) => {
  // Convert URLs to post objects
  const posts: SocialPost[] = urls.map((url) => ({
    url,
    platform: detectPlatform(url),
    title: `Andhra Yuva Sankalp`,
    description: "Check out our latest updates from the digital marathon!",
  }));

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {title && (
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-heading font-bold text-center mb-8"
        >
          {title}
        </motion.h3>
      )}
      
      <div className={`grid gap-6 ${
        posts.length === 1 
          ? "grid-cols-1 max-w-md mx-auto" 
          : posts.length === 2 
            ? "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}>
        {posts.map((post, index) => (
          <SocialPostCard key={post.url} post={post} index={index} />
        ))}
      </div>
    </div>
  );
};

