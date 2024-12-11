import EngineeringImage from "../assets/areas/engineering-all.svg";
import EngineeringImageSherise from "../assets/sherise/engineering-she.svg";
import ArtsImage from "../assets/areas/arts-all.svg";
import BusinessImage from "../assets/areas/business-all.svg";
import BusinessImageSherise from "../assets/sherise/business-she.svg";
import MusicImage from "../assets/areas/music-all.svg";
import MedicineImage from "../assets/areas/medicine-all.svg";
import MedicineImageSherise from "../assets/sherise/medicine-she.svg";
import ScienceImage from "../assets/areas/science-all.svg";
import SocialImage from "../assets/areas/social-all.svg";
import SocialImageSherise from "../assets/sherise/social-she.svg";
import LawImage from "../assets/areas/law-all.svg";
import LawImageSherise from "../assets/sherise/law-she.svg";

const opportunitiesAreas = [
  {
    title: "Engineering & Tech",
    description: "All engineering and technology areas",
    imageSource: EngineeringImage,
    imageSourceSherise: EngineeringImageSherise,
    destinationURL: "engineering",
  },
  {
    title: "Visual & Performance Arts",
    description:
      "Painting, printmaking, sculpture, photography, video, design & Performance",
    imageSource: ArtsImage,
    imageSourceSherise: ArtsImage,
    destinationURL: "arts",
  },
  {
    title: "Business and Marketing",
    description: "Business, HR, Finance, Marketing ",
    imageSource: BusinessImage,
    imageSourceSherise: BusinessImageSherise,
    destinationURL: "business",
  },
  {
    title: "Music",
    description: "Music Production, live acts, DJing",
    imageSource: MusicImage,
    imageSourceSherise: MusicImage,
    destinationURL: "music",
  },
  {
    title: "Medicine & Health Sciences",
    description: "Medicine, nursing, public health, pharmacy, dentistry",
    imageSource: MedicineImage,
    imageSourceSherise: MedicineImageSherise,
    destinationURL: "health",
  },
  {
    title: "Natural Sciences",
    description: "Biology, chemistry,  biomedical sciences, environmental",
    imageSource: ScienceImage,
    imageSourceSherise: ScienceImage,
    destinationURL: "science",
  },
  {
    title: "Social Sciences",
    description:
      "Literature, history, philosophy, art history, sociology, education",
    imageSource: SocialImage,
    imageSourceSherise: SocialImageSherise,
    destinationURL: "social",
  },
  {
    title: "Law and Policies",
    description: "International relations, law, public policies, ",
    imageSource: LawImage,
    imageSourceSherise: LawImageSherise,
    destinationURL: "law",
  },
];

export { opportunitiesAreas };
