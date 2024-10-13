import {
  BalconyIcon,
  BannerImage,
  DiningIcon,
  ElectricityIcon,
  GasIcon,
  HospitalIcon,
  KitchenIcon,
  LoungeIcon,
  MaintenanceIcon,
  MosqueIcon,
  PetrolPumpIcon,
  Property1Image,
  Property2Image,
  SchoolIcon,
  SecurityIcon,
  TvIcon,
  WaterIcon,
  WifiIcon,
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

export const facilities = [
  {
    title: "Wifi",
    icon: WifiIcon,
  },
  {
    title: "TV",
    icon: TvIcon,
  },
  {
    title: "Maintenance",
    icon: MaintenanceIcon,
  },
  {
    title: "Security",
    icon: SecurityIcon,
  },
];

export const nearbyPlaces = [
  {
    title: "School",
    icon: SchoolIcon,
  },
  {
    title: "Mosque",
    icon: MosqueIcon,
  },
  {
    title: "Hospital",
    icon: HospitalIcon,
  },
  {
    title: "Petrol pump",
    icon: PetrolPumpIcon,
  },
];
