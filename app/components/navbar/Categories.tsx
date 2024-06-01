"use client";

import {
  TbBeach,
  TbMountain,
  TbPool,
  TbWindmill,
} from "react-icons/tb";
import Container from "../Container";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
  {
    label: "Beach",
    title: "Beach",
    icon: TbBeach,
    descriptions: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    title: "Windmills",
    icon: TbWindmill,
    descriptions: "This property has windmills!",
  },
  {
    label: "Modern",
    title: "Modern",
    icon: MdOutlineVilla,
    descriptions: "This property is modern!",
  },
  {
    label: "Countryside",
    title: "Countryside",
    icon: TbMountain,
    descriptions: "This property is in the countrySide!",
  },
  {
    label: "Pools",
    title: "Pools",
    icon: TbPool,
    descriptions: "This property has pool!",
  },
  {
    label: "Islands",
    title: "Islands",
    icon: GiIsland,
    descriptions: "This property is on islands!",
  },
  {
    label: "Lake",
    title: "Lake",
    icon: GiBoatFishing,
    descriptions: "This property is close to a lake!",
  },
  {
    label: "Skiing",
    title: "Skiing",
    icon: FaSkiing,
    descriptions: "This property has skiing activities!",
  },
  {
    label: "Castles",
    title: "Castles",
    icon: GiCastle,
    descriptions: "This property is in castle!",
  },
  {
    label: "Camping",
    title: "Camping",
    icon: GiForestCamp,
    descriptions: "This property has camping activities!",
  },
  {
    label: "Arctic",
    title: "Arctic",
    icon: BsSnow,
    descriptions: "This property is in the Arctic!",
  },
  {
    label: "Cave",
    title: "Cave",
    icon: GiCaveEntrance,
    descriptions: "This property is in a cave!",
  },
  {
    label: "Desert",
    title: "Desert",
    icon: GiCactus,
    descriptions: "This property is in the desert!",
  },
  {
    label: "Barns",
    title: "Barns",
    icon: GiBarn,
    descriptions: "This property is in the barn!",
  },
  {
    label: "Lux",
    title: "Lux",
    icon: IoDiamond,
    descriptions: "This property is luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
