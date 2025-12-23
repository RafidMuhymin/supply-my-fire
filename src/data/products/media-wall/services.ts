import ServiceImg1 from "@/assets/images/service-img-1.png";
import ServiceImg2 from "@/assets/images/service-img-2.jpg";
import ServiceImg3 from "@/assets/images/service-img-3.jpg";

const data = {
  title: `Other <em>Cardiff Fireplace</em> Installation <em>Services</em>`,
  services: [
    {
      title: "Gas Fire Installation Cardiff",
      description:
        "Gas Safe certified installation throughout Cardiff, balanced flue options",
      image: ServiceImg1,
      col: "col-span-12",
      gradientBg:
        "lg:bg-[linear-gradient(75deg,rgba(0,0,0,0.80)_12.39%,rgba(0,0,0,0.00)_50.72%)]",
    },
    {
      title: "Electric Fire Installation Cardiff",
      description:
        "No chimney needed - perfect for modern Cardiff properties and apartments",
      image: ServiceImg2,
      col: "col-span-7",
      gradientBg:
        "lg:bg-[linear-gradient(100deg,rgba(0,0,0,0.80)_17.78%,rgba(0,0,0,0.00)_82.45%)]",
    },
    {
      title: "Wood Burning Stove Installation Cardiff",
      description:
        "HETAS approved installation for Cardiff homes, DEFRA approved stoves",
      image: ServiceImg3,
      col: "col-span-5",
      gradientBg:
        "lg:bg-[linear-gradient(177deg,rgba(0,0,0,0.00)_34.92%,rgba(0,0,0,0.71)_97.47%)]",
    },
  ],
  button: {
    href: "#",
    text: "Learn More",
  },
};

export default data;
