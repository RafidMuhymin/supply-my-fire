import CardiffShowroomMap from "@/assets/images/cardiff-showroom-map.png";

const data = {
  title: `Visit Our Cardiff <em>Showroom</em>`,
  subtitle: "See Our Range in Person",
  description:
    "Serving customers from across South Wales and beyond. If you're outside Cardiff, we offer free home surveys throughout Newport, Swansea, Bristol, Bath and surrounding areas.",
  contacts: [
    {
      icon: "location",
      title: "Address:",
      text: "112 Whitchurch Road, Cardiff, CF14 3LY",
    },
    {
      icon: "call",
      title: "Phone:",
      href: "tel:02920309664",
      text: "029 2030 9664",
    },
    {
      icon: "watch",
      title: "Opening Hours:",
      text: `<br/>Tuesday-Friday: 10:00 AM - 4:00 PM <br/> Saturday: 10:00 AM - 2:00 PM <br/> Monday & Sunday: Closed`,
    },
  ],
  buttons: [
    {
      href: "#",
      variant: "primary",
      text: "Book Appointment",
    },
    {
      href: "#",
      variant: "white",
      text: "Book Survey in Your Area",
    },
  ],
  mapImage: {
    src: CardiffShowroomMap,
    alt: "Cardiff Showroom Map",
  },
};

export default data;
