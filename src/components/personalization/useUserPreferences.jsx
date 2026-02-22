import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'brevanext_user_prefs';

const defaultPrefs = {
  visitedPages: [],
  clickedIndustries: [],
  clickedServices: [],
  clickedUseCases: [],
  ctaClicks: [],
  lastVisit: null,
  totalVisits: 0,
  inferredProfile: null,
};

export const PROFILE_MAP = {
  'real-estate': { label: 'Real Estate Pro', cta: 'Automate Your Lead Pipeline', caseStudyIndex: 0 },
  'agency': { label: 'Agency Owner', cta: 'Double Your Client Capacity', caseStudyIndex: 2 },
  'startup': { label: 'SaaS Founder', cta: 'Scale Without Hiring', caseStudyIndex: 1 },
  'ecommerce': { label: 'E-commerce Operator', cta: 'Automate Your Operations', caseStudyIndex: 1 },
  'local-business': { label: 'Local Business Owner', cta: 'Save 20+ Hours a Week', caseStudyIndex: 0 },
  'operations': { label: 'Operations Leader', cta: 'Eliminate Manual Workflows', caseStudyIndex: 2 },
};

function inferProfile(prefs) {
  const allSignals = [
    ...prefs.clickedIndustries,
    ...prefs.clickedServices,
    ...prefs.clickedUseCases,
  ];
  if (allSignals.length === 0) return null;

  const counts = {};
  allSignals.forEach((signal) => {
    counts[signal] = (counts[signal] || 0) + 1;
  });

  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return PROFILE_MAP[top[0]] || null;
}

export function useUserPreferences() {
  const [prefs, setPrefs] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultPrefs, ...JSON.parse(stored) } : defaultPrefs;
    } catch {
      return defaultPrefs;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {}
  }, [prefs]);

  // Count this visit (only once per mount)
  useEffect(() => {
    setPrefs((prev) => ({
      ...prev,
      lastVisit: new Date().toISOString(),
      totalVisits: prev.totalVisits + 1,
    }));
  }, []);

  const track = useCallback((type, value) => {
    setPrefs((prev) => {
      const updated = { ...prev };
      if (type === 'industry') {
        updated.clickedIndustries = [...new Set([...prev.clickedIndustries, value])];
      } else if (type === 'service') {
        updated.clickedServices = [...new Set([...prev.clickedServices, value])];
      } else if (type === 'usecase') {
        updated.clickedUseCases = [...new Set([...prev.clickedUseCases, value])];
      } else if (type === 'cta') {
        updated.ctaClicks = [...prev.ctaClicks, { value, time: Date.now() }];
      }
      updated.inferredProfile = inferProfile(updated);
      return updated;
    });
  }, []);

  return { prefs, track };
}