import EngineeringImage from "../assets/areas/engineering-all.svg";
import ArtsImage from "../assets/areas/arts-all.svg";
import BusinessImage from "../assets/areas/business-all.svg";
import MusicImage from "../assets/areas/music-all.svg";
import MedicineImage from "../assets/areas/medicine-all.svg";
import ScienceImage from "../assets/areas/science-all.svg";
import SocialImage from "../assets/areas/social-all.svg";
import LawImage from "../assets/areas/law-all.svg";

const opportunitiesAreas = [
  {
    title: "Engineering & Tech",
    description: "All engineering and technology areas",
    imageSource: EngineeringImage,
    destinationURL: "engineering",
  },
  {
    title: "Visual & Performance Arts",
    description:
      "Painting, printmaking, sculpture, photography, video, design & Performance",
    imageSource: ArtsImage,
    destinationURL: "arts",
  },
  {
    title: "Business and Marketing",
    description: "Business, HR, Finance, Marketing ",
    imageSource: BusinessImage,
    destinationURL: "business",
  },
  {
    title: "Music",
    description: "Music Production, live acts, DJing",
    imageSource: MusicImage,
    destinationURL: "music",
  },
  {
    title: "Medicine & Health Sciences",
    description: "",
    imageSource: MedicineImage,
    destinationURL: "health",
  },
  {
    title: "Natural Sciences",
    description: "",
    imageSource: ScienceImage,
    destinationURL: "science",
  },
  {
    title: "Social Sciences",
    description: "",
    imageSource: SocialImage,
    destinationURL: "social",
  },
  {
    title: "Law and Policies",
    description: "",
    imageSource: LawImage,
    destinationURL: "law",
  },
];

export { opportunitiesAreas };
