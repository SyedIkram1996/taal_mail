import { EPropertyFeatures, EPropertyFeaturesType } from "@/enums/enums";
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
const {
  BASIC_FEATURES,
  FACILITIES,
  NEARBY_PLACES,
  SECONDARY_FEATURES,
  BASIC_FEATURES_VALUE,
  FACILITIES_VALUE,
  NEARBY_PLACES_VALUE,
  SECONDARY_FEATURES_VALUE,
} = EPropertyFeatures;

const { MULTIPLE, SINGLE } = EPropertyFeaturesType;

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
    type: MULTIPLE,
  },
  {
    title: "Dining Room",
    icon: DiningIcon,
    type: MULTIPLE,
  },
  {
    title: "Drawing Room",
    icon: DiningIcon,
    type: MULTIPLE,
  },
  {
    title: "Store Room",
    icon: DiningIcon,
    type: MULTIPLE,
  },
  {
    title: "Laundry Room",
    icon: DiningIcon,
    type: MULTIPLE,
  },
  {
    title: "Powder Room",
    icon: DiningIcon,
    type: MULTIPLE,
  },
  {
    title: "Study Room",
    icon: DiningIcon,
    type: MULTIPLE,
  },
  {
    title: "Basement",
    icon: DiningIcon,
    type: MULTIPLE,
  },
  {
    title: "Servant Quarter",
    icon: DiningIcon,
    type: MULTIPLE,
  },
  {
    title: "Kitchen",
    icon: KitchenIcon,
    type: MULTIPLE,
  },
  {
    title: "Balcony",
    icon: BalconyIcon,
    type: MULTIPLE,
  },
  {
    title: "Furnished",
    icon: KitchenIcon,
    type: SINGLE,
  },
];

export const facilities = [
  {
    title: "Electricity",
    icon: ElectricityIcon,
    type: SINGLE,
  },
  {
    title: "Gas",
    icon: GasIcon,
    type: SINGLE,
  },

  {
    title: "Water",
    icon: WaterIcon,
    type: SINGLE,
  },
  {
    title: "Sewerage",
    icon: WaterIcon,
    type: SINGLE,
  },
  {
    title: "Security",
    icon: WaterIcon,
    type: SINGLE,
  },
  {
    title: "TV Cable",
    icon: TvIcon,
    type: SINGLE,
  },

  {
    title: "Wifi and Internet",
    icon: WifiIcon,
    type: SINGLE,
  },
  {
    title: "Maintenance",
    icon: MaintenanceIcon,
    type: SINGLE,
  },
];

export const nearbyPlaces = [
  {
    title: "School",
    icon: SchoolIcon,
    type: SINGLE,
  },
  {
    title: "Mosque",
    icon: MosqueIcon,
    type: SINGLE,
  },
  {
    title: "Hospital",
    icon: HospitalIcon,
    type: SINGLE,
  },
  {
    title: "Restaurant",
    icon: PetrolPumpIcon,
    type: SINGLE,
  },
  {
    title: "Petrol pump",
    icon: PetrolPumpIcon,
    type: SINGLE,
  },
];

export const secondaryFeatures = [
  {
    title: "Dirty Kitchen",
    icon: PetrolPumpIcon,
    type: MULTIPLE,
  },
  {
    title: "Lawn",
    icon: PetrolPumpIcon,
    type: MULTIPLE,
  },
  {
    title: "Swimming Pool",
    icon: PetrolPumpIcon,
    type: MULTIPLE,
  },
  {
    title: "Elevator/Lift",
    icon: PetrolPumpIcon,
    type: MULTIPLE,
  },
  {
    title: "Home Theater",
    icon: PetrolPumpIcon,
    type: MULTIPLE,
  },
  {
    title: "Central Cooling",
    icon: PetrolPumpIcon,
    type: SINGLE,
  },
  {
    title: "Accessibility",
    icon: PetrolPumpIcon,
    type: SINGLE,
  },
];

export const features = [
  { title: BASIC_FEATURES, value: BASIC_FEATURES_VALUE, items: basicFeatures },
  { title: FACILITIES, value: FACILITIES_VALUE, items: facilities },
  { title: NEARBY_PLACES, value: NEARBY_PLACES_VALUE, items: nearbyPlaces },
  {
    title: SECONDARY_FEATURES,
    value: SECONDARY_FEATURES_VALUE,
    items: secondaryFeatures,
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
