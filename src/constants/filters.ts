import AgriculturalLandIcon from "@/components/common/SvgIcons/AgriculturalLandIcon";
import ApartmentIcon from "@/components/common/SvgIcons/ApartmentIcon";
import BuildingIcon from "@/components/common/SvgIcons/BuildingIcon";
import CommercialPlotIcon from "@/components/common/SvgIcons/CommercialPlotIcon";
import FactoryIcon from "@/components/common/SvgIcons/FactoryIcon";
import FarmhouseIcon from "@/components/common/SvgIcons/FarmhouseIcon";
import FarmhousePlotIcon from "@/components/common/SvgIcons/FarmhousePlotIcon";
import GuestHouseIcon from "@/components/common/SvgIcons/GuestHouseIcon";
import GymIcon from "@/components/common/SvgIcons/GymIcon";
import HallIcon from "@/components/common/SvgIcons/HallIcon";
import HotelSuiteIcon from "@/components/common/SvgIcons/HotelSuiteIcon";
import HouseIcon from "@/components/common/SvgIcons/HouseIcon";
import IndustrialPlotIcon from "@/components/common/SvgIcons/IndustrialPlotIcon";
import LowerPortionIcon from "@/components/common/SvgIcons/LowerPortionIcon";
import OfficeIcon from "@/components/common/SvgIcons/OfficeIcon";
import RentPropertyIcon from "@/components/common/SvgIcons/RentPropertyIcon";
import ResidentialPlotIcon from "@/components/common/SvgIcons/ResidentialPlotIcon";
import RoomIcon from "@/components/common/SvgIcons/RoomIcon";
import SellPropertyIcon from "@/components/common/SvgIcons/SellPropertyIcon";
import ShopIcon from "@/components/common/SvgIcons/ShopIcon";
import UpperPortionIcon from "@/components/common/SvgIcons/UpperPortionIcon";
import {
  EPropertyClassification,
  EPropertyClassificationType,
} from "@/enums/enums";

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
