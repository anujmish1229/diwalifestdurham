export interface VendorPackage {
  id: string;
  name: string;
  price: string;
  benefits: string[];
  featured?: boolean;
}

export interface VendorEvent {
  id: string;
  title: string;
  time: string;
  description: string;
  packages: VendorPackage[];
}

export const vendorEvents: VendorEvent[] = [
  {
    id: "diwali",
    title: "Durham Diwali Festival",
    time: "5 p.m. – 11 p.m.",
    description:
      "The evening celebration featuring performances, food, vendors, cultural programming, and a signature Diwali experience for the community.",
    packages: [
      {
        id: "diwali-evening",
        name: "Evening Market Vendor",
        price: "$250",
        benefits: [
          "10x10 vendor space",
          "Access to high-traffic evening crowd",
          "Listing on festival website and social media",
          'Inclusion in "Diwali Marketplace" directory',
        ],
      },
      {
        id: "diwali-cultural",
        name: "Cultural Vendor",
        price: "$350",
        benefits: [
          "All Evening Market benefits",
          "Premium placement near stage or main walkway",
          "Logo on event signage",
          "Opportunity to participate in cultural spotlight features",
        ],
        featured: true,
      },
      {
        id: "diwali-food",
        name: "Food Vendor",
        price: "$400",
        benefits: [
          "10x10 food-safe space",
          "Access to peak dinner-time traffic",
          'Listing on "Taste of Diwali" food map',
          "Option to sell full meals, snacks, or sweets",
        ],
      },
    ],
  },
];
