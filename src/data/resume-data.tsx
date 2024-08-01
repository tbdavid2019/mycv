import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chia (江佳澄)",
  initials: "CJ",
  location: "Kaohsiung, Taiwan",
  locationLink: "https://www.google.com/maps/place/Kaohsiung",
  about:
    "擁有超過16年的資訊技術與管理經驗，專注於技術團隊建設和企業數位化轉型。",
  summary:
    "我目前擔任資訊開發 CTO，領導一支超過50人的軟體開發團隊，涵蓋前端、後端、機器學習與QA。我擁有多樣的系統架構和雲端專案經驗，並擅長團隊指揮、代碼審閱及專案管理。",
  avatarUrl: "/me.png",
  personalWebsiteUrl: "#",
  contact: {
    email: "104@david888.com",
    tel: "0906-541-100",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tbdavid2019",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/david11111/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "國立中正大學",
      degree: "碩士學位, 資訊管理研究所",
      start: "2003",
      end: "2006",
    },
    {
      school: "國立中興大學",
      degree: "學士學位, 生物產業機電學系",
      start: "1999",
      end: "2003",
    },
  ],
  work: [
    {
      company: "Confidential Company",
      link: "#",
      badges: ["Remote"],
      title: "資訊開發 CTO",
      logo: minimal,
      start: "2024",
      end: null,
      description:
        "領導一支超過50人的電子商務軟體開發團隊，涵蓋前端、後端、機器學習與QA。主要負責系統架構設計與實施、技術支援與團隊管理。",
    },
    {
      company: "南瓜虛擬科技股份有限公司",
      link: "#",
      badges: ["Remote"],
      title: "軟體開發主管",
      logo: minimal,
      start: "2022",
      end: "2023",
      description:
        "負責組建和管理後端開發、QA和SRE團隊，並參與業務發展與專案談判。領導VR專案開發，涵蓋遊戲、醫療、教育等領域。",
    },
    {
      company: "華奧科技有限公司",
      link: "#",
      badges: [],
      title: "專案管理主管",
      logo: minimal,
      start: "2020",
      end: "2021",
      description:
        "全面負責包網專案的規劃與執行，使用Vue進行前端開發，使用Go進行後端開發，並管理企業自有即時通訊系統。",
    },
    {
      company: "南洋集團子公司",
      link: "#",
      badges: [],
      title: "總經理/顧問",
      logo: minimal,
      start: "2020",
      end: "2021",
      description:
        "領導公司日常運營管理，負責招聘、VoIP/CRM系統設置和團隊管理，並提供企業管理諮詢服務。",
    },
    {
      company: "AG集團投資子公司",
      link: "#",
      badges: [],
      title: "總經理",
      logo: minimal,
      start: "2014",
      end: "2018",
      description:
        "領導1至200人的團隊，專注於大型軟體測試和支付平台開發，並負責後端JAVA開發和API接入。",
    },
  ],
  skills: [
    "Java",
    "PHP",
    "Python",
    "Node.js",
    "Vue.js",
    "Angular",
    "AWS",
    "GCP",
    "DevOps",
    "SRE",
    "MySQL",
    "OLAP",
    "Git",
    "Jenkins",
  ],
  projects: [
    {
      title: "區塊鏈遊戲專案 (AWS-SRE-DevOps)",
      techStack: [
        "Kubernetes",
        "Node.js",
        "AWS",
        "DevOps",
        "Blockchain",
      ],
      description:
        "負責Kubernetes及其他開發基礎建設的建立與維護，支持區塊鏈遊戲Gamefi專案。",
      logo: NLULogo,
      link: {
        label: "github.com",
        href: "#",
      },
    },
    {
      title: "VR遊戲專案",
      techStack: ["Node.js", "Unreal Engine", "VR"],
      description:
        "開發VR頭盔專用遊戲，相容於Quest2, PICO4和HTC Vive。後端採用Node.js API對前端Unreal Engine。",
      logo: VRLogo,
      link: {
        label: "github.com",
        href: "#",
      },
    },
  ],
} as const;
