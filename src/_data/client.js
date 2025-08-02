module.exports = {
  name: "Infinity Investment Property Solutions LLC",
  email: "igarcia2644@gmail.com",
  phoneForTel: "+15745750869",
  phoneFormatted: "(555) 779-4407",
  address: {
    lineOne: "Edwardsburg, MI",
    lineTwo: "United States",
    city: "Edwardsburg",
    state: "MI",
    zip: "49112",
    country: "US",
    mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
  },
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: "https://www.infinityinvestmentpropertysolutions.com",
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === "PROD",
};
