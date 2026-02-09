export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  mapUrl: string;
  orderLinks: { platform: string; url: string }[];
}

export const locations: Location[] = [
  {
    id: "san-marcos",
    name: "Tea Amo San Marcos",
    address: "727 W San Marcos Blvd #108",
    city: "San Marcos",
    state: "CA",
    zip: "92078",
    phone: "(760) 290-3189",
    hours: "Mon–Sat 11am–9pm · Sun 12pm–8pm",
    mapUrl: "https://maps.google.com/?q=727+W+San+Marcos+Blvd+%23108+San+Marcos+CA+92078",
    orderLinks: [
      { platform: "DoorDash", url: "#" },
      { platform: "Uber Eats", url: "#" },
      { platform: "Grubhub", url: "#" },
    ],
  },
];
