/**
 * Facts about the 2026 festival, shared across the site. The attendance figure
 * and certificate list come from HCCD's write-up of the event
 * (hccd.ca/events?event=ajax-durham-diwali-festival).
 */
export const HCCD_SITE = "https://hccd.ca/";
export const HCCD_EVENT_PAGE = "https://hccd.ca/events?event=ajax-durham-diwali-festival";
export const FLYER_PDF = "/Durham%20Diwali%20-%20Event%20Flyer.pdf";
export const CONTACT_EMAIL = "info@durhamdiwalifestival.ca";
export const CONTACT_PHONE = "+1 (905) 429-1752";

/** The drone-show video is hosted on hccd.ca so it isn't duplicated here. */
export const DRONE_VIDEO = "https://hccd.ca/event-videos/ajax-durham-diwali-festival/drone-show-crowd.mp4";

export const festival = {
  date: "Saturday, October 24, 2026",
  venue: "J. Clarke Richardson Collegiate, Ajax",
  attendance: "3,500+",
};

/** Who sent certificates or letters of recognition for the 2026 festival. */
export const recognition = [
  "Doug Ford, Premier of Ontario",
  "Jennifer McKelvie, MP for Ajax",
  "Juanita Nathan, MP for Pickering–Brooklin",
  "Peter Bethlenfalvy, MPP for Pickering–Uxbridge",
  "John Henry, Durham Regional Chair and CEO",
  "Shaun Collier, Mayor of Ajax",
  "Kevin Ashe, Mayor of Pickering",
  "Town of Cobourg",
];

export const sponsors = [
  { name: "Ajax Crematorium & Visitation Centre", logo: "/sponsor-logos/ajax-crematorium.png" },
  { name: "Advisory Money", logo: "/sponsor-logos/advisory-money.png" },
];
