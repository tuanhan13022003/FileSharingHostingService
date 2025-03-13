import React from "react";
import Example from "../Chart";
import { UnderlineTabs } from "../Tab";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowsPointingOutIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

function RightSideBar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="flex justify-between mb-3">
        <div className="flex space-x-3">
          <ArrowRightStartOnRectangleIcon strokeWidth={2} className="h-5 w-5" />
          <ArrowsPointingOutIcon strokeWidth={2} className="h-5 w-5" />
        </div>
        <div>
          <EllipsisVerticalIcon strokeWidth={2} className="h-5 w-5" />
        </div>
      </div>
      <hr className="my-2 border-blue-gray-100" />
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Storage
        </Typography>
      </div>

      <div className="mb-3">
        <Example />
      </div>
      <hr className="my-2 border-blue-gray-100" />
      <div>
        <UnderlineTabs />
      </div>
    </Card>
  );
}

export default RightSideBar;
