// app.js
// All JS for BargainHub – rendering deals, filters, search, and affiliate redirects

(function () {
  "use strict";

  // ============================
  // Deal Data (hardcoded)
  // ============================
  // NOTE: All affiliate URLs below are exactly the ones you provided.
  const deals = [
    {
      id: 1,
      storeName: "MegaMart Online",
      category: "electronics",
      title: "MegaMart Gadget Fiesta",
      discountText: "Up to 60% OFF on gadgets",
      affiliateUrl: "https://bitli.in/jc6f42R",
      displayUrl: "https://bitli.in/jc6f42R",
      description:
        "Grab the hottest electronics including headphones, speakers and accessories at special discounted prices.",
      terms:
        "Valid on selected products only. Additional store terms and conditions may apply at checkout.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 2,
      storeName: "StyleStreet Fashion",
      category: "fashion",
      title: "StyleStreet End of Season Sale",
      discountText: "Flat 40% OFF on fashion",
      affiliateUrl: "https://bitli.in/kyHz5rS",
      displayUrl: "https://bitli.in/kyHz5rS",
      description:
        "Trendy apparel, footwear and accessories at prices that will make your wardrobe happy.",
      terms: "Offer applicable on selected styles and sizes only.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 3,
      storeName: "TechSphere Electronics",
      category: "electronics",
      title: "TechSphere Mega Electronics Days",
      discountText: "Up to 55% OFF",
      affiliateUrl: "https://bitli.in/un885aP",
      displayUrl: "https://bitli.in/un885aP",
      description:
        "Score amazing deals on laptops, smartwatches and other tech essentials.",
      terms: "Limited stock. First come, first served.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 4,
      storeName: "TravelBuddy",
      category: "travel",
      title: "TravelBuddy Holiday Specials",
      discountText: "Up to 50% OFF on travel",
      affiliateUrl: "https://bitli.in/6pO3atU",
      displayUrl: "https://bitli.in/6pO3atU",
      description:
        "Exclusive discounts on hotels and holiday packages for your next getaway.",
      terms: "Blackout dates may apply. Subject to availability.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 5,
      storeName: "HomeEase Store",
      category: "home",
      title: "HomeEase Festive Home Sale",
      discountText: "Up to 45% OFF on home essentials",
      affiliateUrl: "https://bitli.in/S7OW65c",
      displayUrl: "https://bitli.in/S7OW65c",
      description:
        "Upgrade your home with discounted decor, kitchenware and storage solutions.",
      terms: "Valid on selected SKUs. T&C apply.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 6,
      storeName: "GlowBeauty",
      category: "beauty",
      title: "GlowBeauty Skincare & Makeup Deals",
      discountText: "Up to 35% OFF",
      affiliateUrl: "https://bitli.in/fP9phi0",
      displayUrl: "https://bitli.in/fP9phi0",
      description:
        "Top skincare, haircare and makeup brands at special prices to glow on a budget.",
      terms: "Combo offers may vary by product.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 7,
      storeName: "GadgetWorld",
      category: "electronics",
      title: "GadgetWorld Accessory Bonanza",
      discountText: "Up to 60% OFF",
      affiliateUrl: "https://bitli.in/51UUJnN",
      displayUrl: "https://bitli.in/51UUJnN",
      description:
        "Power banks, chargers, cables and more at super-saver prices.",
      terms: "Warranty as per brand policy.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 8,
      storeName: "DailyDeals Hub",
      category: "other",
      title: "DailyDeals Crazy Price Drop",
      discountText: "Flat 30% OFF",
      affiliateUrl: "https://bitli.in/A8ZJ0Up",
      displayUrl: "https://bitli.in/A8ZJ0Up",
      description:
        "Mixed category deals refreshed regularly – from accessories to daily essentials.",
      terms: "Limited quantities. Once sold out, deal ends.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 9,
      storeName: "AJIO Fashion",
      category: "fashion",
      title: "AJIO Fashion Fiesta",
      discountText: "Up to 60% OFF on AJIO styles",
      affiliateUrl: "https://ajiio.in/tOfinhS",
      displayUrl: "https://ajiio.in/tOfinhS",
      description:
        "Curated AJIO fashion picks – clothing, footwear and more at irresistible prices.",
      terms: "Offer valid only on select AJIO collection.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 10,
      storeName: "FlipZone",
      category: "electronics",
      title: "FlipZone Electronics Carnival",
      discountText: "Up to 50% OFF",
      affiliateUrl: "https://bitli.in/E7GHvrO",
      displayUrl: "https://bitli.in/E7GHvrO",
      description:
        "Deals on TVs, smart devices and more for your entertainment setup.",
      terms: "Shipping charges may apply based on location.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 11,
      storeName: "AJIO Exclusive",
      category: "fashion",
      title: "AJIO Exclusive Brand Offers",
      discountText: "Flat 35% OFF",
      affiliateUrl: "https://ajiio.in/DMlHNr6",
      displayUrl: "https://ajiio.in/DMlHNr6",
      description:
        "Exclusive AJIO labels with limited-time discounts for smart shoppers.",
      terms: "Cannot be clubbed with certain coupons.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 12,
      storeName: "TrendBazaar",
      category: "fashion",
      title: "TrendBazaar Style Upgrade",
      discountText: "Up to 50% OFF on apparel",
      affiliateUrl: "https://bitli.in/5T9l2KA",
      displayUrl: "https://bitli.in/5T9l2KA",
      description:
        "Refresh your wardrobe with trendy fits at budget-friendly prices.",
      terms: "Exchange/return as per seller policy.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 13,
      storeName: "SmartBuy Central",
      category: "electronics",
      title: "SmartBuy Gadget Steals",
      discountText: "Up to 55% OFF",
      affiliateUrl: "https://bitli.in/V1MC6GZ",
      displayUrl: "https://bitli.in/V1MC6GZ",
      description:
        "Choose from curated smart devices and electronics with heavy discounts.",
      terms: "Limited-period online only offer.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 14,
      storeName: "UrbanStyle Hub",
      category: "fashion",
      title: "UrbanStyle Streetwear Offers",
      discountText: "Up to 45% OFF",
      affiliateUrl: "https://bitli.in/w257X27",
      displayUrl: "https://bitli.in/w257X27",
      description:
        "Urban-inspired streetwear and casual outfits at special prices.",
      terms: "Prices subject to change without prior notice.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 15,
      storeName: "BudgetBazaar",
      category: "other",
      title: "BudgetBazaar Multi-Category Sale",
      discountText: "Up to 60% OFF storewide",
      affiliateUrl: "https://bitli.in/BuuuTje",
      displayUrl: "https://bitli.in/BuuuTje",
      description:
        "A mix of home, fashion and accessories – all at budget-friendly rates.",
      terms: "Stocks may be limited on high-demand items.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 16,
      storeName: "PrimeElectro",
      category: "electronics",
      title: "PrimeElectro Big Savings",
      discountText: "Up to 50% OFF on electronics",
      affiliateUrl: "https://bitli.in/HT39iiZ",
      displayUrl: "https://bitli.in/HT39iiZ",
      description:
        "Upgrade your gadgets with special discounts on top-rated electronics.",
      terms: "EMI options may be available on select products.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 17,
      storeName: "TripSaver",
      category: "travel",
      title: "TripSaver Hotel & Travel Deals",
      discountText: "Up to 45% OFF on stays",
      affiliateUrl: "https://bitli.in/Demp0TH",
      displayUrl: "https://bitli.in/Demp0TH",
      description:
        "Snag discounts on hotels and travel bundles for upcoming trips.",
      terms: "Cancellation policies may vary by partner.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 18,
      storeName: "HomeEssentials",
      category: "home",
      title: "HomeEssentials Daily Needs Sale",
      discountText: "Up to 40% OFF",
      affiliateUrl: "https://bitli.in/06yhS65",
      displayUrl: "https://bitli.in/06yhS65",
      description:
        "Kitchen, cleaning and home basics at prices that are easy on the pocket.",
      terms: "Minimum cart value may apply on some offers.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 19,
      storeName: "OfferWorld",
      category: "other",
      title: "OfferWorld Super Saver Deals",
      discountText: "Up to 55% OFF",
      affiliateUrl: "https://bitli.in/W62v3at",
      displayUrl: "https://bitli.in/W62v3at",
      description:
        "Mixed-category deals for smart shoppers looking for all-round savings.",
      terms: "Offer valid only for online purchases.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 20,
      storeName: "SaverStop",
      category: "other",
      title: "SaverStop Price Slash",
      discountText: "Flat 30% OFF",
      affiliateUrl: "https://bitli.in/zHO0u3t",
      displayUrl: "https://bitli.in/zHO0u3t",
      description:
        "Specially curated bundle discounts and combo deals on popular items.",
      terms: "Offer duration may be shortened based on demand.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 21,
      storeName: "DealKart",
      category: "other",
      title: "DealKart Storewide Offers",
      discountText: "Up to 50% OFF",
      affiliateUrl: "https://bitli.in/25iDuAb",
      displayUrl: "https://bitli.in/25iDuAb",
      description:
        "Deals across multiple categories – perfect for one-stop savings.",
      terms: "Not all deals are eligible for returns.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 22,
      storeName: "BeautyNest",
      category: "beauty",
      title: "BeautyNest Glam Offers",
      discountText: "Up to 35% OFF on beauty",
      affiliateUrl: "https://bitli.in/g15H3ag",
      displayUrl: "https://bitli.in/g15H3ag",
      description:
        "Cosmetics, skincare and wellness products with attractive markdowns.",
      terms: "Some freebies may be available on select orders.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 23,
      storeName: "QuickGadgets",
      category: "electronics",
      title: "QuickGadgets Flash Sale",
      discountText: "Up to 60% OFF",
      affiliateUrl: "https://bitli.in/Wknmkuc",
      displayUrl: "https://bitli.in/Wknmkuc",
      description:
        "Limited-time flash sale on gadgets and accessories – hurry before it ends.",
      terms: "Flash sale timings may vary; stock is limited.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 24,
      storeName: "ElectroMart",
      category: "electronics",
      title: "ElectroMart Smart Device Deals",
      discountText: "Up to 50% OFF",
      affiliateUrl: "https://bitli.in/yi2cy03",
      displayUrl: "https://bitli.in/yi2cy03",
      description:
        "Smartphones, smartwatches and accessories at special bargain prices.",
      terms: "Device exchange schemes may be available separately.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 25,
      storeName: "StyleHive",
      category: "fashion",
      title: "StyleHive Fashion Favourites",
      discountText: "Up to 45% OFF on styles",
      affiliateUrl: "https://bitli.in/XdY2Qif",
      displayUrl: "https://bitli.in/XdY2Qif",
      description:
        "Top picks in fashion – from everyday basics to party-ready fits.",
      terms: "Sizes and colors may be limited.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 26,
      storeName: "TechBazaar",
      category: "electronics",
      title: "TechBazaar Big Tech Sale",
      discountText: "Up to 55% OFF",
      affiliateUrl: "https://bitli.in/OXnk8Qe",
      displayUrl: "https://bitli.in/OXnk8Qe",
      description:
        "A wide range of gadgets and electronics at aggressively discounted rates.",
      terms: "Offer applicable while stocks last.",
      expiry: "Valid till 30 Nov 2025",
    },
    {
      id: 27,
      storeName: "GoTripNow",
      category: "travel",
      title: "GoTripNow Travel Deals",
      discountText: "Up to 50% OFF on bookings",
      affiliateUrl: "https://bitli.in/WXJPkZ7",
      displayUrl: "https://bitli.in/WXJPkZ7",
      description:
        "Save on travel bookings, weekend getaways and more with special discounts.",
      terms: "Booking dates and availability may vary.",
      expiry: "Valid till 30 Nov 2025",
    },
  ];

  // ============================
  // State
  // ============================
  let currentCategory = "all";
  let currentSearch = "";

  // ============================
  // DOM Elements
  // ============================
  const dealsGrid = document.getElementById("dealsGrid");
  const noResultsEl = document.getElementById("noResults");
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.getElementById("searchForm");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const footerYear = document.getElementById("footerYear");
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // ============================
  // Rendering Logic
  // ============================
  function createDealCard(deal) {
    const article = document.createElement("article");
    article.className = "deal-card";
    article.dataset.id = deal.id;

    const categoryLabel =
      deal.category.charAt(0).toUpperCase() + deal.category.slice(1);

    article.innerHTML = `
      <div class="deal-card-header">
        <div class="store-badge">
          <span class="store-initial">${deal.storeName.charAt(0)}</span>
          <span class="store-name">${deal.storeName}</span>
        </div>
        <span class="deal-category">${categoryLabel}</span>
      </div>

      <h3 class="deal-title">${deal.title}</h3>
      <p class="deal-discount">${deal.discountText}</p>

      <div class="deal-actions">
        <button class="btn-claim" type="button" data-deal-id="${deal.id}">
          Claim Offer
        </button>
        <button class="btn-info" type="button" data-deal-id="${deal.id}" aria-label="More info">
          i
        </button>
      </div>

      <div class="deal-tooltip">
        <p class="tooltip-description">${deal.description}</p>
        <p class="tooltip-terms"><strong>Terms:</strong> ${deal.terms}</p>
        <p class="tooltip-expiry"><strong>Expires:</strong> ${deal.expiry}</p>
      </div>
    `;

    return article;
  }

  function applyFilters() {
    const searchTerm = currentSearch.trim().toLowerCase();

    const filtered = deals.filter((deal) => {
      const matchesCategory =
        currentCategory === "all" || deal.category === currentCategory;

      const haystack =
        (deal.storeName + " " + deal.title + " " + deal.category).toLowerCase();

      const matchesSearch = !searchTerm || haystack.includes(searchTerm);

      return matchesCategory && matchesSearch;
    });

    dealsGrid.innerHTML = "";

    if (!filtered.length) {
      noResultsEl.classList.remove("hidden");
      return;
    }

    noResultsEl.classList.add("hidden");

    filtered.forEach((deal) => {
      const card = createDealCard(deal);
      dealsGrid.appendChild(card);
    });
  }

  // ============================
  // Event Handlers
  // ============================

  // Category filter click
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");

      currentCategory = category || "all";

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      applyFilters();
    });
  });

  // Search (submit + live typing)
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      currentSearch = searchInput.value || "";
      applyFilters();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentSearch = searchInput.value || "";
      applyFilters();
    });
  }

  // Delegate clicks for Claim Offer + info tooltip
  document.addEventListener("click", (event) => {
    const claimBtn = event.target.closest(".btn-claim");
    const infoBtn = event.target.closest(".btn-info");

    // Handle Claim Offer -> affiliate redirect
    if (claimBtn) {
      const id = Number(claimBtn.getAttribute("data-deal-id"));
      const deal = deals.find((d) => d.id === id);
      if (deal && deal.affiliateUrl) {
        // Affiliate redirect (user only sees a normal button, not the tracking link)
        window.location.href = deal.affiliateUrl;
      }
      return;
    }

    // Handle tooltip toggling on mobile / click
    if (infoBtn) {
      const card = infoBtn.closest(".deal-card");
      if (card) {
        const isActive = card.classList.contains("show-tooltip");
        // Close any open tooltip cards
        document
          .querySelectorAll(".deal-card.show-tooltip")
          .forEach((c) => c.classList.remove("show-tooltip"));

        if (!isActive) {
          card.classList.add("show-tooltip");
        }
      }
      return;
    }

    // Clicking outside cards closes tooltips
    const clickedInsideCard = event.target.closest(".deal-card");
    if (!clickedInsideCard) {
      document
        .querySelectorAll(".deal-card.show-tooltip")
        .forEach((c) => c.classList.remove("show-tooltip"));
    }
  });

  // Simple mobile nav toggle
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      siteNav.classList.toggle("open");
    });

    // Close nav when a link is clicked (mobile UX)
    siteNav.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav-link")) {
        siteNav.classList.remove("open");
      }
    });
  }

  // ============================
  // Initial render
  // ============================
  applyFilters();
})();
// ============================
// File: assets/js/script.js
// Basic interactions for UnfilteredSphere
// ============================

// dynamic year in footer (if element exists)
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// mobile nav toggle
const mobileToggle = document.getElementById("mobile-toggle");
const mobileNav = document.querySelector(".nav-mobile");

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
  });
}

// close mobile menu on link click
if (mobileNav) {
  mobileNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileNav.classList.remove("show");
    }
  });
}
