import { useCallback } from 'react';

export const useUmamiAnalytics = () => {
  const trackEvent = useCallback((eventName: string, eventData?: Record<string, string | number | boolean>) => {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track(eventName, eventData);
    }
  }, []);

  const trackCTAClick = useCallback((ctaName: string, location?: string) => {
    trackEvent('cta_click', { name: ctaName, location: location || 'unknown' });
  }, [trackEvent]);

  const trackFormSubmit = useCallback((formName: string, success: boolean = true) => {
    trackEvent('form_submit', { form: formName, success });
  }, [trackEvent]);

  const trackDownload = useCallback((fileName: string) => {
    trackEvent('download', { file: fileName });
  }, [trackEvent]);

  const trackArticleView = useCallback((articleSlug: string, articleTitle: string) => {
    trackEvent('article_view', { slug: articleSlug, title: articleTitle });
  }, [trackEvent]);

  const trackNewsletterSignup = useCallback((success: boolean = true) => {
    trackEvent('newsletter_signup', { success });
  }, [trackEvent]);

  return {
    trackEvent,
    trackCTAClick,
    trackFormSubmit,
    trackDownload,
    trackArticleView,
    trackNewsletterSignup,
  };
};
