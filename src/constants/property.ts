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
    title: "Drawing Room",
    icon: DiningIcon,
  },
  {
    title: "Store Room",
    icon: DiningIcon,
  },
  {
    title: "Laundry Room",
    icon: DiningIcon,
  },
  {
    title: "Powder Room",
    icon: DiningIcon,
  },
  {
    title: "Study Room",
    icon: DiningIcon,
  },
  {
    title: "Basement",
    icon: DiningIcon,
  },
  {
    title: "Servant Quarter",
    icon: DiningIcon,
  },
  {
    title: "Kitchen",
    icon: KitchenIcon,
  },
  {
    title: "Balcony",
    icon: BalconyIcon,
  },
  {
    title: "Furnished",
    icon: KitchenIcon,
  },
];

export const facilities = [
  {
    title: "Electricity",
    icon: ElectricityIcon,
  },
  {
    title: "Gas",
    icon: GasIcon,
  },

  {
    title: "Water",
    icon: WaterIcon,
  },
  {
    title: "Sewerage",
    icon: WaterIcon,
  },
  {
    title: "Security",
    icon: WaterIcon,
  },
  {
    title: "TV Cable",
    icon: TvIcon,
  },

  {
    title: "Wifi and Internet",
    icon: WifiIcon,
  },
  {
    title: "Maintenance",
    icon: MaintenanceIcon,
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
    title: "Restaurant",
    icon: PetrolPumpIcon,
  },
  {
    title: "Petrol pump",
    icon: PetrolPumpIcon,
  },
];

export const secondaryFeatures = [
  {
    title: "Dirty Kitchen",
    icon: PetrolPumpIcon,
  },
  {
    title: "Lawn",
    icon: PetrolPumpIcon,
  },
  {
    title: "Swimming Pool",
    icon: PetrolPumpIcon,
  },
  {
    title: "Elevator/Lift",
    icon: PetrolPumpIcon,
  },
  {
    title: "Home Theater",
    icon: PetrolPumpIcon,
  },
  {
    title: "Central Cooling",
    icon: PetrolPumpIcon,
  },
  {
    title: "Accessibility",
    icon: PetrolPumpIcon,
  },
];

export const dues = [
  {
    title: "All dues cleared",
    value: "cleared",
  },
  {
    title: "Not cleared",
    value: "notCleared",
  },
];

export const status = [
  {
    title: "Completion",
    value: "completion",
  },
  {
    title: "Possession",
    value: "possession",
  },
];
