import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, initScrollTracking } from '@/lib/analytics';

/**
 * Analytics Provider Component
 * Automatically tracks page views on route changes and initializes scroll tracking
 */
export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Track page views on route change
  useEffect(() => {
    // Small delay to ensure page title is updated
    const timer = setTimeout(() => {
      trackPageView(location.pathname, document.title);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Initialize scroll tracking once
  useEffect(() => {
    initScrollTracking();
  }, []);

  return <>{children}</>;
};

export default AnalyticsProvider;

