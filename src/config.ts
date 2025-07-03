export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Honest Conversations",
  description: "The Church has been given the great responsibility to live in His kingdom that is both here but not yet. A kingdom that seems foolish to those that do not believe and can not see it. As followers we live by faith, walking out what is required of us - to do justice, love kindness and walk humbly before our God. Our reason we are writing this blog is because after 31 years of ministry and hundreds of years of history, we have become accustomed in church leadership to ignore justice, walk proudly and aspire for adulation from people rather than God.",
  author: {
    name: "Yoel & Christy Bartolome",
    bio: "Christy and I have spent over three decades in full time ministry, and Honest Conversations is where we invite the church to ask the hard questions that many avoid—about justice, power, accountability, and the subtle ways spiritual authority can be misused.",
    avatar: "/avatar.jpg" // Correct path for Astro public assets
  },
  social: {
    email: "hi@honestconversations.net"
  },
  siteUrl: "https://honestconversations.net"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;