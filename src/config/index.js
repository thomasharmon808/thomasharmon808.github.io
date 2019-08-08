module.exports = {
  siteTitle: "Harmon",
  siteDescription:
    "Thomas Harmon is a software engineer in Boston, MA who carries a broad set of skills, ranging from electrical and computer engineering, data science, machine learning, to full stack stoftware development.",
  siteKeywords:
    "Thomas Harmon, Thomas, Harmon, tharmon808, thomasharmon808, software engineer, front-end engineer, back-end engineer, full-stack engineer, northeastern, neu, boston",
  siteUrl: "https://harmon.tech/",
  siteLanguage: "en_US",

  name: "Thomas Harmon",
  location: "Boston, MA",
  email: "thomas.alan.harmon@gmail.com",
  github: "https://github.com/thomasharmon808/",
  linkedin: "https://www.linkedin.com/in/tharmony/",
  twitterHandle: "@thomasharmon808",
  spotify: "https://open.spotify.com/user/1251807662?si=owPSoIB3TcmECePho4fSSw",

  navbarHeight: "69px",

  socialMedia: [
    {
      name: "Github",
      url: "https://github.com/thomasharmon808/",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/tharmony/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/tomthegrom808/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/thomasharmon808",
    },
  ],

  navLinks: [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Experience",
      url: "#experience",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ],

  srConfig: (delay = 200) => ({
    origin: "bottom",
    distance: "15px",
    duration: 350,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
  //googleAnalyticsID: '',
  //googleVerification: '',
}
