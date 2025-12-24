import ModernApartment from "@/assets/images/modern-apartment.jpg";
import InstallationImg2 from "@/assets/images/installation-img-2.jpg";
import InstallationImg3 from "@/assets/images/installation-img-3.jpg";
import InstallationImg4 from "@/assets/images/installation-img-4.jpg";

const data = {
  title: "Recent Cardiff <em>Media Wall</em> Installations",
  installations: [
    {
      image: ModernApartment,

      title: "Modern Apartment",
      description: "Contemporary white finish with Solution SLE150",
      location: "Cardiff City Centre",
    },
    {
      image: InstallationImg2,

      title: "Victorian Terrace",
      description: "Wood veneer effect with Gazco eStudio",
      location: "Pontcanna",
    },
    {
      image: InstallationImg3,
      badge: "HETAS approved installation",
      title: "New Build",
      description: "Grey panel design with Vision VS150",
      location: "Penarth",
    },
    {
      image: InstallationImg4,
      badge: "Victorian Terrace",
      title: "Period Property",
      description: "Dark finish with Stovax Riva",
      location: "Roath",
    },
  ],
  button: {
    href: "#",
    text: "Request Your Free Design Consultation",
  },
};

export default data;
