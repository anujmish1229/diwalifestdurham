export interface SponsorshipTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  tagline: string;
  benefits: string[];
  featured?: boolean;
}

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    id: "diya",
    name: "Diya",
    subtitle: "Presenting Sponsor",
    price: "$20,000",
    tagline: "Top tier — symbolizing the light that leads the festival",
    benefits: [
      "Exclusive presenting sponsor recognition",
      "Logo prominence on all festival materials",
      "Stage recognition during opening ceremony",
      "Vendor booth or activation space",
      "Social media features and website spotlight",
      "Opportunity to speak or present at the event",
    ],
    featured: true,
  },
  {
    id: "rangoli",
    name: "Rangoli",
    subtitle: "Gold Tier",
    price: "$15,000",
    tagline: "Celebrating creativity, colour, and community",
    benefits: [
      "Prominent logo placement on marketing materials",
      "Recognition on festival website and social media",
      "On-site signage at key festival areas",
      "Vendor booth option",
      "Acknowledgment during the program",
    ],
  },
  {
    id: "lantern",
    name: "Lantern",
    subtitle: "Premium Tier",
    price: "$10,000",
    tagline: "Lighting the pathway for cultural heritage and connection",
    benefits: [
      "Significant logo presence on event signage and website",
      "Dedicated social media recognition",
      "Mention in official press releases",
      "Preferred vendor booth location",
    ],
  },
  {
    id: "lotus",
    name: "Lotus",
    subtitle: "Silver Tier",
    price: "$5,000",
    tagline: "Symbolizing purity, growth, and cultural harmony",
    benefits: [
      "Logo included on website and select promotional materials",
      "On-site signage",
      "Social media acknowledgment",
      "Option for a small activation or booth",
    ],
  },
  {
    id: "spark",
    name: "Spark",
    subtitle: "Bronze Tier",
    price: "$1,000",
    tagline: "Honouring the small lights that make the festival shine",
    benefits: [
      "Logo on website sponsor page",
      "Social media thank-you post",
      "On-site group sponsor board recognition",
    ],
  },
  {
    id: "community",
    name: "Community Friend",
    subtitle: "Entry-Level Tier",
    price: "$500",
    tagline: "Accessible entry-level tier for small businesses and families",
    benefits: [
      "Name listed on website",
      "Group recognition on sponsor board",
      "Optional social media acknowledgment",
    ],
  },
];
