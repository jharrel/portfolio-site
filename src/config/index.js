module.exports = {
  siteTitle: 'Jason Harrel | Software Engineer',
  siteDescription:
    'Jason Harrel is a software engineer based in the San Francisco Bay Area who develops full stack software and has 10 years of experience with video production and graphic design',
  siteKeywords:
    'Jason Harrel, Jason, Harrel, jharrel, software engineer, front-end engineer, web developer, javascript, ruby, ruby on rails, html, css, video production, motion graphics, graphic design, flatiron school, flatiron',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Jason Harrel',
  location: 'San Francisco, Calif.',
  email: 'jharreldesign@gmail.com',
  github: 'https://github.com/jharrel',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jharrel',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jasonharrel',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/bchiang7',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/bchiang7',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
