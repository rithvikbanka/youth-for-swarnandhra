import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  trackPageView,
  trackEvent,
  trackRegistrationClick,
  trackEventPageView,
  trackResourceDownload,
  trackSocialClick,
  trackEventInterest,
  trackFAQInteraction,
  trackVideoPlay,
  initScrollTracking,
} from '@/lib/analytics';

/**
 * Hook for tracking page views automatically on route change
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);
};

/**
 * Hook for initializing scroll tracking on mount
 */
export const useScrollTracking = () => {
  useEffect(() => {
    initScrollTracking();
  }, []);
};

/**
 * Main analytics hook providing tracking functions
 */
export const useAnalytics = () => {
  const trackRegistration = useCallback((source: string) => {
    trackRegistrationClick(source);
  }, []);

  const trackEventPage = useCallback((eventName: string, eventSlug: string) => {
    trackEventPageView(eventName, eventSlug);
  }, []);

  const trackDownload = useCallback((resourceName: string, resourceType: 'pdf' | 'schedule' | 'guideline' | 'other') => {
    trackResourceDownload(resourceName, resourceType);
  }, []);

  const trackSocial = useCallback((platform: string) => {
    trackSocialClick(platform);
  }, []);

  const trackInterest = useCallback((eventName: string) => {
    trackEventInterest(eventName);
  }, []);

  const trackFAQ = useCallback((question: string, action: 'expand' | 'collapse') => {
    trackFAQInteraction(question, action);
  }, []);

  const trackVideo = useCallback((videoTitle: string, videoId?: string) => {
    trackVideoPlay(videoTitle, videoId);
  }, []);

  const trackCustomEvent = useCallback((eventName: string, params?: Record<string, string | number | boolean>) => {
    trackEvent(eventName, params);
  }, []);

  return {
    trackRegistration,
    trackEventPage,
    trackDownload,
    trackSocial,
    trackInterest,
    trackFAQ,
    trackVideo,
    trackCustomEvent,
  };
};

export default useAnalytics;

