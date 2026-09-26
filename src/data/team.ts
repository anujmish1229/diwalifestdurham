export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  /**
   * Optional explicit photo path/URL. When omitted, the team grid looks for
   * /public/team/<slugified-name>.jpg (e.g. "Cecil Ramnauth" -> /team/cecil-ramnauth.jpg)
   * and falls back to an initials tile if that file doesn't exist.
   */
  photo?: string;
}

export const team: TeamMember[] = [
  {
    name: "Cecil Ramnauth",
    role: "Co-Chair",
    bio: "Cecil Ramnauth is a respected community leader and retired Manager of the Manufacturing Engineering Department at GE Nuclear, where he built a distinguished career grounded in technical excellence, integrity, and service. Cecil has been a long-standing pillar within the Hindu community, having served as a Director of Devi Mandir and dedicating more than twelve years as Secretary while supporting numerous additional portfolios. His leadership extended beyond temple governance into national advocacy, where he played a lead role in championing the proclamation of Hindu Heritage Month at both the provincial and federal levels. Cecil served as a member of the By-Law Committee of Adjustments for the Town of Ajax and as part of the Community Advisory Panel for Lakeridge Health. In recognition of his decades of volunteerism and civic leadership, Cecil is the proud recipient of the Lifetime Achievement Civic Award and the Queen's Volunteer Award.",
  },
  {
    name: "Mukesh Mishra",
    role: "Co-Chair",
    bio: "Mukesh Mishra, based in Ajax, Ontario, is an accomplished engineering and project management professional with more than two decades of experience across the energy, pharmaceutical, and industrial sectors. He currently serves as a WCTL at Ontario Power Generation. Mukesh's career includes progressive leadership roles at Ontario Power Generation, Apotex Inc., and Reliance Industries Limited, where he built deep expertise in project management, power generation, project engineering, nuclear operations, and maintenance planning. He holds a Project Management Professional (PMP) designation and a Bachelor of Engineering (Mechanical Engineering) from South Gujarat University. Beyond his professional achievements, Mukesh is a dedicated community leader and active contributor to cultural and educational initiatives across Durham Region, bringing a strong commitment to cultural inclusion, youth engagement, and community-building.",
  },
  {
    name: "Puneet Aujla",
    role: "Director / Sponsor",
    bio: "Puneet Aujla is a dedicated funeral services professional with the Ajax Crematorium & Visitation Centre, where he supports families with compassion, dignity, and cultural understanding. With extensive experience supporting families across the Greater Toronto Area, Puneet is known for his steady leadership, empathy, and professionalism. Puneet is also a proud contributing sponsor of the Durham Diwali Festival, demonstrating his belief in uplifting cultural initiatives and strengthening community connection. As a member of the organizing team, he brings strong organizational skills, a community-minded approach, and a passion for cultural celebration.",
  },
  {
    name: "Nidhi Mishra",
    role: "Community Outreach Director",
  },
  {
    name: "Dinesh Kumar",
    role: "Marketing Director",
  },
  {
    name: "Priyank Lakhiya",
    role: "Vendor Management Director",
  },
];
