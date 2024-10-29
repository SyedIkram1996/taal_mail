import {
  EPropertyClassification,
  EPropertyClassificationType,
} from "@/enums/enums";
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

const {
  RESIDENTIAL,
  PLOT,
  COMMERCIAL,
  RESIDENTIAL_VALUE,
  PLOT_VALUE,
  COMMERCIAL_VALUE,
} = EPropertyClassification;

const {
  HOUSE,
  APARTMENT,
  UPPER_PORTION,
  LOWER_PORTION,
  HOTEL_SUITE,
  FARMHOUSE,
  ROOM,
  GUEST_HOUSE,
  RESIDENTIAL_PLOT,
  COMMERCIAL_PLOT,
  AGRICULTURAL_LAND,
  FARMHOUSE_PLOT,
  INDUSTRIAL_PLOT,
  OFFICE,
  BUILDING,
  SHOP,
  HALL,
  GYM,
  FACTORY,
} = EPropertyClassificationType;

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
    type: RESIDENTIAL,
    value: RESIDENTIAL_VALUE,
    items: [
      { icon: HouseIcon, text: HOUSE },
      { icon: ApartmentIcon, text: APARTMENT },
      { icon: UpperPortionIcon, text: UPPER_PORTION },
      { icon: LowerPortionIcon, text: LOWER_PORTION },
      { icon: HotelSuiteIcon, text: HOTEL_SUITE },
      { icon: FarmhouseIcon, text: FARMHOUSE },
      { icon: RoomIcon, text: ROOM },
      { icon: GuestHouseIcon, text: GUEST_HOUSE },
    ],
  },
  {
    index: 1,
    type: PLOT,
    value: PLOT_VALUE,
    items: [
      { icon: ResidentialPlotIcon, text: RESIDENTIAL_PLOT },
      { icon: CommercialPlotIcon, text: COMMERCIAL_PLOT },
      { icon: AgriculturalLandIcon, text: AGRICULTURAL_LAND },
      { icon: FarmhousePlotIcon, text: FARMHOUSE_PLOT },
      { icon: IndustrialPlotIcon, text: INDUSTRIAL_PLOT },
    ],
  },
  {
    index: 2,
    type: COMMERCIAL,
    value: COMMERCIAL_VALUE,
    items: [
      { icon: OfficeIcon, text: OFFICE },
      { icon: BuildingIcon, text: BUILDING },
      { icon: ShopIcon, text: SHOP },
      { icon: HallIcon, text: HALL },
      { icon: GymIcon, text: GYM },
      { icon: FactoryIcon, text: FACTORY },
    ],
  },
];
