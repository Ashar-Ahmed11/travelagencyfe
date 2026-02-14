export function getCdnUrl(localUrl) {
  try {
    if (typeof window === 'undefined') return localUrl;
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') return localUrl;
    if (!localUrl) return localUrl;
    const cdnPrefix = 'https://res.cloudinary.com/dextrzp2q/image/fetch/f_webp/q_60/';
    // If it's already an absolute URL, wrap it directly
    if (/^https?:\/\//i.test(localUrl)) {
      return cdnPrefix + encodeURI(localUrl);
    }
    // Otherwise, construct absolute URL from current origin
    const absolute = `${window.location.origin}${localUrl.startsWith('/') ? localUrl : `/${localUrl}`}`;
    return cdnPrefix + encodeURI(absolute);
  } catch {
    return localUrl;
  }
}

