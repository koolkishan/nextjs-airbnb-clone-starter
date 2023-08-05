import Ac from "airbnb/svg/ameneties/ac";
import Bbq from "airbnb/svg/ameneties/bbq";
import Beach from "airbnb/svg/ameneties/beach";
import CarbonMonoxideAlarm from "airbnb/svg/ameneties/carbon-monoxide-alarm";
import FireExt from "airbnb/svg/ameneties/fire-ext";
import FirePit from "airbnb/svg/ameneties/fire-pit";
import FirstAid from "airbnb/svg/ameneties/first-aid";
import Gym from "airbnb/svg/ameneties/gym";
import HotTub from "airbnb/svg/ameneties/hot-tub";
import IndoorFirplace from "airbnb/svg/ameneties/indoor-firplace";
import Kitchen from "airbnb/svg/ameneties/kitchen";
import Lake from "airbnb/svg/ameneties/lake";
import OutdoorDining from "airbnb/svg/ameneties/outdoor-dining";
import OutdoorShower from "airbnb/svg/ameneties/outdoor-shower";
import PaidParking from "airbnb/svg/ameneties/paid-parking";
import Parking from "airbnb/svg/ameneties/parking";
import Patio from "airbnb/svg/ameneties/patio";
import Piano from "airbnb/svg/ameneties/piano";
import Pool from "airbnb/svg/ameneties/pool";
import PoolTable from "airbnb/svg/ameneties/pool-table";
import Ski from "airbnb/svg/ameneties/ski";
import SmokeAlarm from "airbnb/svg/ameneties/smoke-alarm";
import Tv from "airbnb/svg/ameneties/tv";
import WashingMachine from "airbnb/svg/ameneties/washing-machine";
import Wifi from "airbnb/svg/ameneties/wifi";
import Workplace from "airbnb/svg/ameneties/workplace";

export const AmenetiesType = [
  {
    type: "basic",
    data: [
      { name: "Wifi", svgPath: <Wifi /> },
      { name: "TV", svgPath: <Tv /> },
      { name: "Kitchen", svgPath: <Kitchen /> },
      { name: "Washing Machine", svgPath: <WashingMachine /> },
      { name: "Free parking on premises", svgPath: <Parking /> },
      { name: "Paid parking on premises", svgPath: <PaidParking /> },
      { name: "Air conditioning", svgPath: <Ac /> },
      { name: "Dedicated workplace", svgPath: <Workplace /> },
    ],
  },
  {
    type: "advanced",
    data: [
      { name: "Pool", svgPath: <Pool /> },
      { name: "Hot tub", svgPath: <HotTub /> },
      { name: "Patio", svgPath: <Patio /> },
      { name: "BBQ grill", svgPath: <Bbq /> },
      { name: "Outdoor dining area", svgPath: <OutdoorDining /> },
      { name: "Fire pit", svgPath: <FirePit /> },
      { name: "Pool table", svgPath: <PoolTable /> },
      { name: "Indoor fireplace", svgPath: <IndoorFirplace /> },
      { name: "Piano", svgPath: <Piano /> },
      { name: "Exercise equipment", svgPath: <Gym /> },
      { name: "Lake access", svgPath: <Lake /> },
      { name: "Beach access", svgPath: <Beach /> },
      { name: "Ski-in/Ski-out", svgPath: <Ski /> },
      { name: "Outdoor shower", svgPath: <OutdoorShower /> },
    ],
  },
  {
    type: "safety",
    data: [
      { name: "Smoke alarm", svgPath: <SmokeAlarm /> },
      { name: "First aid kit", svgPath: <FirstAid /> },
      { name: "Fire extinguisher", svgPath: <FireExt /> },
      { name: "Carbon monoxide alarm", svgPath: <CarbonMonoxideAlarm /> },
    ],
  },
];
