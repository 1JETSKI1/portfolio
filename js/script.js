(function () {
  var translations = {
    nl: {
      "meta.title.home": "Mik de Looij | Webdesigner",
      "meta.title.about": "Over mij | Mik de Looij",
      "meta.title.contact": "Contact | Mik de Looij",
      "meta.title.portfolio": "Portfolio | Mik de Looij",
      "meta.title.products": "Producten | Mik de Looij",

      "nav.home": "Home",
      "nav.products": "Producten",
      "nav.portfolio": "Portfolio",
      "nav.about": "Over mij",
      "nav.contact": "Contact",

      "hero.heading": "Webdesign dat kleine bedrijven online laat stralen.",
      "hero.text":
        "Ik ben Mik — ik bouw strakke, snelle, op maat gemaakte websites voor bedrijven die willen opvallen.",
      "hero.cta": "Laten we samenwerken",
      "hero.note": "Ik reageer binnen 24 uur",

      "services.heading": "Mijn Diensten",
      "services.basic.title": "Basic",
      "services.basic.priceFrom": "Vanaf",
      "services.exVat": "excl. btw",
      "services.basic.note": "Ideaal om mee te starten",
      "services.cta": "Aan de slag",
      "services.premium.badge": "Populair",
      "services.premium.title": "Premium",
      "services.premium.priceFrom": "Vanaf",
      "services.premium.note": "Voor bedrijven die meer willen",
      "maintenance.title": "Website Onderhoud",
      "maintenance.text":
        "Updates, beveiliging en kleine aanpassingen aan je website, met ondersteuning wanneer je die nodig hebt.",
      "maintenance.perMonth": "/ maand",
      "maintenance.cta": "Meer info",

      "work.heading": "Recent Werk",
      "work.anywaybikes.desc": "Website voor een e-bike merk.",
      "work.viewPortfolio": "Bekijk mijn portfolio",

      "cta.heading": "Klaar om je bedrijf online te zetten?",
      "cta.text": "Laten we een website bouwen waar je klanten van houden.",

      "about.heading": "Over mij",
      "about.text":
        "Ik ben een gedreven webdesigner met een focus op het maken van mooie, functionele websites die bedrijven helpen online te groeien.",

      "contact.heading": "Laten we samenwerken",
      "contact.text": "Heb je een project in gedachten? Laten we samenwerken!",
      "contact.form.name": "Je naam",
      "contact.form.email": "Je e-mailadres",
      "contact.form.phone": "Je telefoonnummer (optioneel)",
      "contact.form.message":
        "Vertel me iets over je bedrijf, wat voor website je nodig hebt, en eventuele planning of budget...",
      "contact.form.submit": "Verstuur bericht",

      "portfolio.heading": "Portfolio",

      "products.heading": "Producten",
      "products.comingSoon.title": "Product komt binnenkort",
      "products.comingSoon.text":
        "Ik ben bezig met mijn eerste product. Kom snel terug om te zien wat er beschikbaar is.",

      "footer.rights": "Alle rechten voorbehouden.",
      "footer.contactHeading": "Contact",
      "footer.menuHeading": "Menu",
    },
    en: {
      "meta.title.home": "Mik de Looij | Web Designer",
      "meta.title.about": "About | Mik de Looij",
      "meta.title.contact": "Contact | Mik de Looij",
      "meta.title.portfolio": "Portfolio | Mik de Looij",
      "meta.title.products": "Products | Mik de Looij",

      "nav.home": "Home",
      "nav.products": "Products",
      "nav.portfolio": "Portfolio",
      "nav.about": "About",
      "nav.contact": "Contact",

      "hero.heading":
        "Web design that helps small businesses look their best online.",
      "hero.text":
        "I'm Mik — I build clean, fast, custom websites for businesses that want to stand out.",
      "hero.cta": "Let's work together",
      "hero.note": "I respond within 24 hours",

      "services.heading": "My Services",
      "services.basic.title": "Basic",
      "services.basic.priceFrom": "From",
      "services.exVat": "ex. VAT",
      "services.basic.note": "Best for starting businesses",
      "services.cta": "Get started",
      "services.premium.badge": "Popular",
      "services.premium.title": "Premium",
      "services.premium.priceFrom": "From",
      "services.premium.note": "For businesses that want more",
      "maintenance.title": "Website Maintenance",
      "maintenance.text":
        "Updates, security and small changes to your website, with support whenever you need it.",
      "maintenance.perMonth": "/ month",
      "maintenance.cta": "Learn more",

      "work.heading": "Recent Work",
      "work.anywaybikes.desc": "Website for an e-bike brand.",
      "work.viewPortfolio": "View my portfolio",

      "cta.heading": "Ready to get your business online?",
      "cta.text": "Let's build a website your customers will love.",

      "about.heading": "About Me",
      "about.text":
        "I'm a passionate web designer with a focus on creating beautiful, functional websites that help businesses thrive online.",

      "contact.heading": "Let's work together",
      "contact.text": "Have a project in mind? Let's work together!",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.phone": "Your Phone Number (optional)",
      "contact.form.message":
        "Tell me a bit about your business, what kind of website you need, and any timeline or budget in mind...",
      "contact.form.submit": "Send Message",

      "portfolio.heading": "Portfolio",

      "products.heading": "Products",
      "products.comingSoon.title": "Product coming soon",
      "products.comingSoon.text":
        "I'm putting together my first product. Check back soon to see what's available.",

      "footer.rights": "All rights reserved.",
      "footer.contactHeading": "Contact",
      "footer.menuHeading": "Menu",
    },
  };

  var DEFAULT_LANG = "nl";
  var STORAGE_KEY = "lang";

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable, ignore */
    }
  }

  function applyLanguage(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
    });
  }

  function initLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        setStoredLang(lang);
        applyLanguage(lang);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = getStoredLang() || DEFAULT_LANG;
    applyLanguage(lang);
    initLangSwitch();
  });
})();
