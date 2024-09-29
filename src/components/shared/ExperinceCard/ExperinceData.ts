export interface IExperinceData {
  id: number;
  companyName: string;
  position: string;
  descriptionList: string[];
  startDate: string;
  isPresent: boolean;
  country: string;
  city: string;
  endDate?: string;
  technologies?: string[];
  description?: string;
}
export const experinceData: IExperinceData[] = [
  {
    id: 1,
    companyName: "Oracle",
    startDate: "Dec 2023",
    isPresent: true,
    position: "Software Engineer",
    technologies: [
      "Angular",
      "Ionic",
      "Node",
      "Typescript",
      "Javascript",
      "Css",
      "HTML",
      "Sass",
      "Responsive Web",
      "Native Mobile Development",
    ],
    country: "Qatar",
    city: "Doha",
    descriptionList: [
      "Working on portal and services and mobile application for ministry of municipality at Qatar",
      "These applications used to automate and put all Qatar services at one place to allow citizen and resident achieve their requests easily",
      "Built application with Angular and Ionic as front end",
      "Utilized Oracle services such as SOA and Oracle Database and BPM",
    ],
  },

  {
    id: 2,
    companyName: "Rasan",
    startDate: "Dec 2023",
    isPresent: true,
    position: "Software Engineer",
    technologies: [
      "Angular",
      "Ionic",
      "Node",
      "Typescript",
      "Javascript",
      "Css",
      "HTML",
      "Sass",
      "Responsive Web",
      "Native Mobile Development",
    ],
    country: "Qatar",
    city: "Doha",
    descriptionList: [
      "Working on portal and services and mobile application for ministry of municipality at Qatar",
      "These applications used to automate and put all Qatar services at one place to allow citizen and resident achieve their requests easily",
      "Built application with Angular and Ionic as front end",
      "Utilized Oracle services such as SOA and Oracle Database and BPM",
    ],
  },
];
