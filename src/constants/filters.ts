import {
  AgriculturalLandIcon,
  ApartmentIcon,
  BuildingIcon,
  CommercialPlotIcon,
  FactoryIcon,
  FarmhouseIcon,
  FarmhousePlotIcon,
  GuestHouseIcon,
  GymIcon,
  HallIcon,
  HotelSuiteIcon,
  HouseIcon,
  IndustrialPlotIcon,
  LowerPortionIcon,
  OfficeIcon,
  RentPropertyIcon,
  ResidentialPlotIcon,
  RoomIcon,
  SellPropertyIcon,
  ShopIcon,
  UpperPortionIcon,
} from "./images.routes";

export const rentBuy = [
  {
    title: "Rent",
    value: "rent",
  },
  {
    title: "Buy",
    value: "buy",
  },
];

export const rentSell = [
  {
    title: "Sell",
    value: "sell",
    icon: SellPropertyIcon,
  },
  {
    title: "Rent",
    value: "rent",
    icon: RentPropertyIcon,
  },
];

export const areas = [
  {
    title: "Sq.ft",
    value: "sqft",
  },
  {
    title: "Sq.Yd",
    value: "sqyd",
  },
  {
    title: "Sq.M",
    value: "sqm",
  },
  {
    title: "Marla",
    value: "marla",
  },
  {
    title: "Kanal",
    value: "kanal",
  },
];

export const baths = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

export const beds = ["Studio", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

export const propertyTypes = [
  {
    index: 0,
    type: "Residential",
    items: [
      { icon: HouseIcon, text: "House" },
      { icon: ApartmentIcon, text: "Apartment" },
      { icon: UpperPortionIcon, text: "Upper Portion" },
      { icon: LowerPortionIcon, text: "Lower Portion" },
      { icon: HotelSuiteIcon, text: "Hotel Suite" },
      { icon: FarmhouseIcon, text: "Farmhouse" },
      { icon: RoomIcon, text: "Room" },
      { icon: GuestHouseIcon, text: "Guest House" },
    ],
  },
  {
    index: 1,
    type: "Plot",
    items: [
      { icon: ResidentialPlotIcon, text: "Residential Plot" },
      { icon: CommercialPlotIcon, text: "Commercial Plot" },
      { icon: AgriculturalLandIcon, text: "Agricultural Land" },
      { icon: FarmhousePlotIcon, text: "Farmhouse Plot" },
      { icon: IndustrialPlotIcon, text: "Industrial Plot" },
    ],
  },
  {
    index: 2,
    type: "Commercial",
    items: [
      { icon: OfficeIcon, text: "Office" },
      { icon: BuildingIcon, text: "Building" },
      { icon: ShopIcon, text: "Shop" },
      { icon: HallIcon, text: "Hall" },
      { icon: GymIcon, text: "Gym" },
      { icon: FactoryIcon, text: "Factory" },
    ],
  },
];
