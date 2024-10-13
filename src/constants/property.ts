import {
  BalconyIcon,
  BannerImage,
  DiningIcon,
  ElectricityIcon,
  GasIcon,
  KitchenIcon,
  LoungeIcon,
  Property1Image,
  Property2Image,
  WaterIcon,
} from "./images.routes";

export const propertyImages = [Property1Image, Property2Image, BannerImage];

export const propertyStatus = [
  {
    title: "Status:",
    value: "Completed",
  },
  {
    title: "Ownership:",
    value: "Owner Name",
  },
  {
    title: "Dues:",
    value: "All dues cleared",
  },
  {
    title: "Location:",
    value: "House 128, Street...",
  },
];

export const basicFeatures = [
  {
    title: "Lounge",
    icon: LoungeIcon,
  },
  {
    title: "Dining Room",
    icon: DiningIcon,
  },
  {
    title: "Kitchen",
    icon: KitchenIcon,
  },
  {
    title: "Gas",
    icon: GasIcon,
  },
  {
    title: "Electricity",
    icon: ElectricityIcon,
  },
  {
    title: "Water",
    icon: WaterIcon,
  },
  {
    title: "Balcony",
    icon: BalconyIcon,
  },
];
