import { useEffect } from 'react';

const SITE_URL = 'https://www.evercrest-roofing.com';

export default function SeoHead({ title, description, path = '/', service, business = false }) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', name); document.head.appendChild(tag); }
      tag.setAttribute('content', content);
    };
    setMeta('description', description);
    const setProperty = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('property', property); document.head.appendChild(tag); }
      tag.setAttribute('content', content);
    };
    setProperty('og:title', title);
    setProperty('og:description', description);
    setProperty('og:url', `${SITE_URL}${path}`);
    setProperty('og:type', 'website');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${SITE_URL}${path}`;
    const schema = business ? {
      '@context': 'https://schema.org', '@type': ['LocalBusiness', 'RoofingContractor'],
      name: 'Evercrest Roofing', url: SITE_URL, telephone: '+353852312579', email: 'evercrestroofing037@gmail.com',
      areaServed: ['Dublin City', 'South Dublin', 'North Dublin', 'Fingal'],
      address: { '@type': 'PostalAddress', addressLocality: 'Dublin', addressCountry: 'IE' },
      priceRange: '€€', sameAs: []
    } : service ? {
      '@context': 'https://schema.org', '@type': 'Service', name: service.name,
      serviceType: service.name, areaServed: { '@type': 'City', name: 'Dublin' },
      provider: { '@type': 'RoofingContractor', name: 'Evercrest Roofing', url: SITE_URL, telephone: '+353852312579' }
    } : null;
    let script = document.getElementById('page-schema');
    if (script) script.remove();
    if (schema) { script = document.createElement('script'); script.id = 'page-schema'; script.type = 'application/ld+json'; script.textContent = JSON.stringify(schema); document.head.appendChild(script); }
    return () => { const current = document.getElementById('page-schema'); if (current) current.remove(); };
  }, [title, description, path, service, business]);
  return null;
}
