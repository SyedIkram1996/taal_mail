import {
  BUY_HOUSE,
  BUY_PLOT,
  CONTACT_US,
  RENT_APARTMENT,
  RENT_HOUSE,
  SELL_HOUSE,
  SELL_PLOT,
  TERMS_AND_CONDITIONS,
} from "./page.routes";

export const navbarPages = [
  {
    title: "Sell",
    link: "",
    menu: [
      { title: "Sell a Plot", link: SELL_PLOT },
      { title: "Sell a House", link: SELL_HOUSE },
    ],
  },
  {
    title: "Buy",
    link: "",
    menu: [
      { title: "Buy a Plot", link: BUY_PLOT },
      { title: "Buy a House", link: BUY_HOUSE },
    ],
  },
  {
    title: "Rent",
    link: "",
    menu: [
      { title: "Rent an Apartment", link: RENT_APARTMENT },
      { title: "Rent a House", link: RENT_HOUSE },
    ],
  },
  { title: "Invest", link: "", menu: [] },
  {
    title: "About Us",
    link: "",
    menu: [
      { title: "Contact Us", link: CONTACT_US },
      { title: "Terms & Conditions", link: TERMS_AND_CONDITIONS },
    ],
  },
];
