/**
 * Site configuration
 * Centralized configuration for contact info, social links, and site metadata
 */

export interface SocialLink {
  label: string;
  href: string;
  abbr: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export const siteConfig = {
  name: 'Peter Rodrigues Butao',
  title: 'Peter Rodrigues Butao — Portfolio',
  description: 'Project Development Specialist, Web Designer & Software Developer based in Malawi.',
  url: 'https://peterbutao.pages.dev',
  
  contact: {
    email: 'peterethanbutao@gmail.com',
    phone: '+265 880 164 455',
    phoneSecondary: '+265 991 894 703',
    location: 'Lilongwe, Malawi',
    mapsUrl: 'https://maps.google.com/?q=Lilongwe,Malawi'
  },
  
  socials: {
    linkedin: 'https://www.linkedin.com/in/peter-butao-7238471b4/',
    github: 'https://github.com/Peterbutao'
  },
  
  links: {
    cv: '/documents/CV - PETER BUTAO.docx',
    dribbble: 'https://dribbble.com'
  }
};

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn',  href: siteConfig.socials.linkedin,   abbr: 'LI' },
  { label: 'GitHub',    href: siteConfig.socials.github,     abbr: 'GH' }
];

export const contactChannels: ContactChannel[] = [
  { 
    label: 'Email', 
    value: siteConfig.contact.email, 
    href: `mailto:${siteConfig.contact.email}`, 
    icon: '@' 
  },
  { 
    label: 'Phone', 
    value: siteConfig.contact.phone, 
    href: `tel:${siteConfig.contact.phone}`, 
    icon: '☏' 
  },
  { 
    label: 'Location', 
    value: siteConfig.contact.location, 
    href: siteConfig.contact.mapsUrl, 
    icon: '⌖' 
  }
];
