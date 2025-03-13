import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import {
  DocumentChartBarIcon,
  ComputerDesktopIcon,
  PhotoIcon,
  DocumentIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const customers = [
  {
    name: "Documents",
    email: 223,
    price: 760,
    image: (
      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
        <ComputerDesktopIcon strokeWidth={2} className="h-5 w-5" />
      </div>
    ),
  },
  {
    name: "Videos",
    email: 46,
    price: 500,
    image: (
      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
        <DocumentChartBarIcon strokeWidth={2} className="h-5 w-5" />
      </div>
    ),
  },
  {
    name: "Images",
    email: 472,
    price: 360,
    image: (
      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
        <PhotoIcon strokeWidth={2} className="h-5 w-5" />
      </div>
    ),
  },
  {
    name: "PDF",
    email: 96,
    price: 300,
    image: (
      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
        <DocumentIcon strokeWidth={2} className="h-5 w-5" />
      </div>
    ),
  },
  {
    name: "Unknown files",
    email: 123,
    price: 240,
    image: (
      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
        <QuestionMarkCircleIcon strokeWidth={2} className="h-5 w-5" />
      </div>
    ),
  },
];

export function CardWithList() {
  return (
    <div className="">
      {customers.map(({ name, email, price, image }, index) => (
        <div
          key={index}
          className="flex items-center justify-between pb-3 pt-3 last:pb-0"
        >
          <div className="flex items-center gap-x-3">
            <div>{image}</div>

            <div>
              <Typography color="blue-gray" variant="h6">
                {name}
              </Typography>
              <Typography variant="small" color="gray">
                {email} files
              </Typography>
            </div>
          </div>
          <Typography color="blue" variant="h6">
            {price} GB
          </Typography>
        </div>
      ))}
    </div>
  );
}
