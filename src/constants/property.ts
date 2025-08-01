import { EPropertyFeatures, EPropertyFeaturesType } from "@/enums/enums";
import { BannerImage, Property1Image, Property2Image } from "./images.routes";
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

import AccessibilityIcon from "@/components/common/SvgIcons/AccessibilityIcon";
import BalconyIcon from "@/components/common/SvgIcons/BalconyIcon";
import BasementIcon from "@/components/common/SvgIcons/BasementIcon";
import CentralCoolingIcon from "@/components/common/SvgIcons/CentralCoolingIcon";
import DiningRoomIcon from "@/components/common/SvgIcons/DiningRoomIcon";
import DirtyKitchenIcon from "@/components/common/SvgIcons/DirtyKitchenIcon";
import DrawingRoomIcon from "@/components/common/SvgIcons/DrawingRoomIcon";
import ElectricityIcon from "@/components/common/SvgIcons/ElectricityIcon";
import ElevatorLiftIcon from "@/components/common/SvgIcons/ElevatorLiftIcon";
import FurnishedIcon from "@/components/common/SvgIcons/FurnishedIcon";
import GasIcon from "@/components/common/SvgIcons/GasIcon";
import HomeTheaterIcon from "@/components/common/SvgIcons/HomeTheaterIcon";
import HospitalIcon from "@/components/common/SvgIcons/HospitalIcon";
import KitchenIcon from "@/components/common/SvgIcons/KitchenIcon";
import LaundryRoomIcon from "@/components/common/SvgIcons/LaundryRoomIcon";
import LawnIcon from "@/components/common/SvgIcons/LawnIcon";
import LoungeIcon from "@/components/common/SvgIcons/LoungeIcon";
import MaintenanceIcon from "@/components/common/SvgIcons/MaintenanceIcon";
import MosqueIcon from "@/components/common/SvgIcons/MosqueIcon";
import PetrolPumpIcon from "@/components/common/SvgIcons/PetrolPumpIcon";
import PowderRoomIcon from "@/components/common/SvgIcons/PowderRoomIcon";
import RestaurantIcon from "@/components/common/SvgIcons/RestaurantIcon";
import SchoolIcon from "@/components/common/SvgIcons/SchoolIcon";
import SecurityIcon from "@/components/common/SvgIcons/SecurityIcon";
import ServantQuarterIcon from "@/components/common/SvgIcons/ServantQuarterIcon";
import SewerageIcon from "@/components/common/SvgIcons/SewerageIcon";
import StoreRoomIcon from "@/components/common/SvgIcons/StoreRoomIcon";
import StudyRoomIcon from "@/components/common/SvgIcons/StudyRoomIcon";
import SwimmingPoolIcon from "@/components/common/SvgIcons/SwimmingPoolIcon";
import TbCableIcon from "@/components/common/SvgIcons/TvCableIcon";
import WaterIcon from "@/components/common/SvgIcons/WaterIcon";
import WifiAndInternetIcon from "@/components/common/SvgIcons/WifiAndInternetIcon";

const { MULTIPLE, SINGLE } = EPropertyFeaturesType;

const {
  LOUNGE,
  DINING_ROOM,
  DRAWING_ROOM,
  STORE_ROOM,
  LAUNDRY_ROOM,
  POWDER_ROOM,
  STUDY_ROOM,
  BASEMENT,
  SERVANT_QUARTER,
  KITCHEN,
  BALCONY,
  FURNISHED,
  ELECTRICITY,
  GAS,
  WATER,
  SEWERAGE,
  SECURITY,
  TV_CABLE,
  WIFI_AND_INTERNET,
  MAINTENANCE,
  SCHOOL,
  MOSQUE,
  HOSPITAL,
  RESTAURANT,
  PETROL_PUMP,
  DIRTY_KITCHEN,
  LAWN,
  SWIMMING_POOL,
  ELEVATOR_LIFT,
  HOME_THEATER,
  CENTRAL_COOLING,
  CENTRAL_HEATING,
  ACCESSIBILITY,
} = EPropertyFeaturesType;

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

// export const greyIcons: { [key: string]: string } = {
//   [LOUNGE]: LoungeIcon,
//   [DINING_ROOM]: LoungeIcon,
//   [DRAWING_ROOM]: LoungeIcon,
//   [STORE_ROOM]: LoungeIcon,
//   [LAUNDRY_ROOM]: LoungeIcon,
//   [POWDER_ROOM]: LoungeIcon,
//   [STUDY_ROOM]: LoungeIcon,
//   [BASEMENT]: LoungeIcon,
//   [SERVANT_QUARTER]: LoungeIcon,
//   [KITCHEN]: LoungeIcon,
//   [BALCONY]: LoungeIcon,
//   [FURNISHED]: LoungeIcon,
//   [ELECTRICITY]: LoungeIcon,
//   [GAS]: LoungeIcon,
//   [WATER]: LoungeIcon,
//   [SEWERAGE]: LoungeIcon,
//   [SECURITY]: LoungeIcon,
//   [TV_CABLE]: LoungeIcon,
//   [WIFI_AND_INTERNET]: LoungeIcon,
//   [MAINTENANCE]: LoungeIcon,
//   [SCHOOL]: LoungeIcon,
//   [MOSQUE]: LoungeIcon,
//   [HOSPITAL]: LoungeIcon,
//   [RESTAURANT]: LoungeIcon,
//   [PETROL_PUMP]: LoungeIcon,
//   [DIRTY_KITCHEN]: LoungeIcon,
//   [LAWN]: LoungeIcon,
//   [SWIMMING_POOL]: LoungeIcon,
//   [ELEVATOR_LIFT]: LoungeIcon,
//   [HOME_THEATER]: LoungeIcon,
//   [CENTRAL_COOLING]: LoungeIcon,
//   [ACCESSIBILITY]: LoungeIcon,
// };

export const basicFeatures = [
  {
    title: LOUNGE,
    icon: LoungeIcon,
    type: MULTIPLE,
  },
  {
    title: DINING_ROOM,
    icon: DiningRoomIcon,
    type: MULTIPLE,
  },
  {
    title: DRAWING_ROOM,
    icon: DrawingRoomIcon,
    type: MULTIPLE,
    pathFill: true,
  },
  {
    title: STORE_ROOM,
    icon: StoreRoomIcon,
    type: MULTIPLE,
    pathFill: true,
  },
  {
    title: LAUNDRY_ROOM,
    icon: LaundryRoomIcon,
    type: MULTIPLE,
    pathFill: true,
  },
  {
    title: POWDER_ROOM,
    icon: PowderRoomIcon,
    type: MULTIPLE,
    pathFill: true,
  },
  {
    title: STUDY_ROOM,
    icon: StudyRoomIcon,
    type: MULTIPLE,
  },
  {
    title: BASEMENT,
    icon: BasementIcon,
    type: MULTIPLE,
  },
  {
    title: SERVANT_QUARTER,
    icon: ServantQuarterIcon,
    type: MULTIPLE,
    pathFill: true,
  },
  {
    title: KITCHEN,
    icon: KitchenIcon,
    type: MULTIPLE,
  },
  {
    title: BALCONY,
    icon: BalconyIcon,
    type: MULTIPLE,
    pathFill: true,
  },
  {
    title: FURNISHED,
    icon: FurnishedIcon,
    type: SINGLE,
  },
];

export const facilities = [
  {
    title: ELECTRICITY,
    icon: ElectricityIcon,
    type: SINGLE,
  },
  {
    title: GAS,
    icon: GasIcon,
    type: SINGLE,
  },
  {
    title: WATER,
    icon: WaterIcon,
    type: SINGLE,
  },
  {
    title: SEWERAGE,
    icon: SewerageIcon,
    type: SINGLE,
    pathFill: true,
  },
  {
    title: SECURITY,
    icon: SecurityIcon,
    type: SINGLE,
  },
  {
    title: TV_CABLE,
    icon: TbCableIcon,
    type: SINGLE,
  },
  {
    title: WIFI_AND_INTERNET,
    icon: WifiAndInternetIcon,
    type: SINGLE,
  },
  {
    title: MAINTENANCE,
    icon: MaintenanceIcon,
    type: SINGLE,
    pathFill: true,
  },
];

export const nearbyPlaces = [
  {
    title: SCHOOL,
    icon: SchoolIcon,
    type: SINGLE,
  },
  {
    title: MOSQUE,
    icon: MosqueIcon,
    type: SINGLE,
    pathFill: true,
  },
  {
    title: HOSPITAL,
    icon: HospitalIcon,
    type: SINGLE,
  },
  {
    title: RESTAURANT,
    icon: RestaurantIcon,
    type: SINGLE,
    pathFill: true,
  },
  {
    title: PETROL_PUMP,
    icon: PetrolPumpIcon,
    type: SINGLE,
  },
];

export const secondaryFeatures = [
  {
    title: DIRTY_KITCHEN,
    icon: DirtyKitchenIcon,
    type: MULTIPLE,
  },
  {
    title: LAWN,
    icon: LawnIcon,
    type: MULTIPLE,
    pathFill: true,
  },
  {
    title: SWIMMING_POOL,
    icon: SwimmingPoolIcon,
    type: MULTIPLE,
  },
  {
    title: ELEVATOR_LIFT,
    icon: ElevatorLiftIcon,
    type: MULTIPLE,
  },
  {
    title: HOME_THEATER,
    icon: HomeTheaterIcon,
    type: MULTIPLE,
  },
  {
    title: CENTRAL_COOLING,
    icon: CentralCoolingIcon,
    type: SINGLE,
  },

  {
    title: CENTRAL_HEATING,
    icon: CentralCoolingIcon,
    type: SINGLE,
  },
  {
    title: ACCESSIBILITY,
    icon: AccessibilityIcon,
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
