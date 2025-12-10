/**
 * Google Analytics GA4 Integration for YUVA 2025
 * Measurement ID: G-MG312711SN
 * Domain: apyouthfestival.com
 */

// Type declarations for gtag
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// GA4 Measurement ID
export const GA_MEASUREMENT_ID = 'G-MG312711SN';

/**
 * Check if gtag is loaded and available
 */
export const isGtagLoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Track page view
 */
export const trackPageView = (url: string, title?: string): void => {
  if (!isGtagLoaded()) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

/**
 * Track custom event
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
): void => {
  if (!isGtagLoaded()) return;
  
  window.gtag('event', eventName, {
    ...params,
    timestamp: new Date().toISOString(),
  });
};

// ==========================================
// FORM TRACKING
// ==========================================

/**
 * Track form submission click (for external Google Forms)
 */
export const trackFormClick = (
  formName: string,
  formType: 'participant' | 'organizer' | 'volunteer'
): void => {
  trackEvent('form_click', {
    form_name: formName,
    form_type: formType,
    event_category: 'engagement',
  });
};

/**
 * Track registration button click
 */
export const trackRegistrationClick = (source: string): void => {
  trackEvent('registration_click', {
    click_source: source,
    event_category: 'conversion',
  });
};

// ==========================================
// PAGE/SECTION TRACKING
// ==========================================

/**
 * Track when user views a specific section
 */
export const trackSectionView = (sectionName: string): void => {
  trackEvent('section_view', {
    section_name: sectionName,
    event_category: 'engagement',
  });
};

/**
 * Track event page visit
 */
export const trackEventPageView = (eventName: string, eventSlug: string): void => {
  trackEvent('event_page_view', {
    event_name: eventName,
    event_slug: eventSlug,
    event_category: 'content',
  });
};

// ==========================================
// RESOURCE TRACKING
// ==========================================

/**
 * Track resource/PDF download
 */
export const trackResourceDownload = (
  resourceName: string,
  resourceType: 'pdf' | 'schedule' | 'guideline' | 'other'
): void => {
  trackEvent('resource_download', {
    resource_name: resourceName,
    resource_type: resourceType,
    event_category: 'engagement',
  });
};

/**
 * Track schedule PDF download
 */
export const trackScheduleDownload = (): void => {
  trackResourceDownload('YUVA 2025 Full Schedule', 'schedule');
};

// ==========================================
// VIDEO TRACKING
// ==========================================

/**
 * Track video play
 */
export const trackVideoPlay = (videoTitle: string, videoId?: string): void => {
  trackEvent('video_play', {
    video_title: videoTitle,
    video_id: videoId || 'unknown',
    event_category: 'engagement',
  });
};

// ==========================================
// NAVIGATION TRACKING
// ==========================================

/**
 * Track external link click
 */
export const trackExternalLink = (url: string, linkText: string): void => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
    event_category: 'outbound',
  });
};

/**
 * Track social media link click
 */
export const trackSocialClick = (platform: string): void => {
  trackEvent('social_click', {
    social_platform: platform,
    event_category: 'social',
  });
};

// ==========================================
// SCROLL TRACKING
// ==========================================

/**
 * Track scroll depth (call at various scroll percentages)
 */
export const trackScrollDepth = (percentage: number): void => {
  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
    event_category: 'engagement',
  });
};

// ==========================================
// CUSTOM YUVA EVENTS
// ==========================================

/**
 * Track event interest (when user clicks "Explore" on event card)
 */
export const trackEventInterest = (eventName: string): void => {
  trackEvent('event_interest', {
    event_name: eventName,
    event_category: 'interest',
  });
};

/**
 * Track language switch
 */
export const trackLanguageSwitch = (fromLang: string, toLang: string): void => {
  trackEvent('language_switch', {
    from_language: fromLang,
    to_language: toLang,
    event_category: 'preferences',
  });
};

/**
 * Track FAQ interaction
 */
export const trackFAQInteraction = (question: string, action: 'expand' | 'collapse'): void => {
  trackEvent('faq_interaction', {
    faq_question: question.substring(0, 100), // Truncate for analytics
    faq_action: action,
    event_category: 'engagement',
  });
};

/**
 * Track gallery image view
 */
export const trackGalleryView = (imageIndex: number): void => {
  trackEvent('gallery_view', {
    image_index: imageIndex,
    event_category: 'engagement',
  });
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Initialize scroll depth tracking
 * Call this once on page load
 */
export const initScrollTracking = (): void => {
  if (typeof window === 'undefined') return;
  
  const scrollThresholds = [25, 50, 75, 90, 100];
  const trackedThresholds = new Set<number>();
  
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    scrollThresholds.forEach(threshold => {
      if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
        trackedThresholds.add(threshold);
        trackScrollDepth(threshold);
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
};

/**
 * Debug function - logs all dataLayer events to console
 */
export const debugAnalytics = (): void => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    console.log('📊 GA4 DataLayer:', window.dataLayer);
    console.log('📊 gtag loaded:', isGtagLoaded());
  }
};

// Export verification test function
export const testAnalytics = (): void => {
  console.log('🔍 Testing GA4 Analytics...');
  console.log('✅ gtag loaded:', isGtagLoaded());
  
  if (isGtagLoaded()) {
    trackEvent('test_event', { test_param: 'test_value' });
    console.log('✅ Test event sent! Check GA4 Real-time reports.');
  } else {
    console.log('❌ gtag not loaded. Check if script is in <head>');
  }
};

