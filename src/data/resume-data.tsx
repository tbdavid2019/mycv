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
  name: "Chia Cheng Chiang",
  initials: "David C",
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
        url: "https://linktr.ee/david.chiang",
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
      badges: [],
      title: "資訊開發 CTO",
      logo: Minimal,
      start: "2024",
      end: null,
      description:
        "領導一支超過50人的電子商務軟體開發團隊，涵蓋前端、後端、機器學習與QA。主要負責系統架構設計與實施、技術支援與團隊管理。",
    },
    {
      company: "南瓜虛擬科技股份有限公司",
      link: "#",
      badges: [],
      title: "軟體開發主管",
      logo: Minimal,
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
      logo: Minimal,
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
      logo: Minimal,
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
      logo: Minimal,
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
      "title": "區塊鏈遊戲專案 (AWS-SRE-DevOps)",
      "techStack": [
        "Kubernetes",
        "Node.js",
        "AWS",
        "DevOps",
        "Blockchain"
      ],
      "description": "負責Kubernetes及其他開發基礎建設的建立與維護，支持區塊鏈遊戲Gamefi專案，十萬級別。",
      "logo": "Minimal",
      "link": {
        "label": "github.com",
        "href": "#"
      }
    },
    {
      "title": "VR遊戲專案 Quantaar",
      "techStack": [
        "Meta Oculus",
        "Unreal Engine",
        "VR"
      ],
      "description": "開發VR頭盔專用遊戲，相容於Quest2, PICO4和HTC Vive。後端採用Node.js API對前端Unreal Engine。",
      "logo": "Minimal",
      "link": {
        "label": "VR",
        "href": "#"
      }
    },
    {
      "title": "VR體驗分發平台",
      "techStack": [
        "Unity",
        "VR"
      ],
      "description": "這專案多用途 已經用於以下申請與應用 Unframed App , 教育部「112-113 年5G 新科技學習示範學校計畫 」",
      "logo": "Minimal",
      "link": {
        "label": "VR",
        "href": "#"
      }
    },
    {
      "title": "屈臣氏電商",
      "techStack": [
        "SAP Commerce Cloud",
        "Hybris"
      ],
      "description": "這專案長期服務總部的資訊開發與維護案, 服務多國BU",
      "logo": "Minimal",
      "link": {
        "label": "SAP Commerce Cloud solution",
        "href": "#"
      }
    },
    {
      "title": "美國家具Bobs",
      "techStack": [
        "SAP Commerce Cloud",
        "Hybris"
      ],
      "description": "這專案長期服務總部的資訊開發與維護案, 服務美國",
      "logo": "Minimal",
      "link": {
        "label": "SAP Commerce Cloud solution",
        "href": "#"
      }
    },
    {
      "title": "辦公室現場成員是否要到辦公室|遠端提醒機器人",
      "techStack": [
        "telegram",
        "bot",
        "slack",
        "Line"
      ],
      "description": "為了照顧同事，擔任總監期間有規定若氣象局發布大雨特報則不用進辦公室，做出一個機器人通知到同事的IM是否要進辦公室的建議",
      "logo": "Minimal",
      "link": {
        "label": "Weather_Alert_Bot",
        "href": "https://github.com/tbdavid2019/multi-platform-weather-alert"
      }
    },
    {
      "title": "K8s POC | Kyma to Daocloud",
      "techStack": [
        "k8s",
        "kyma"
      ],
      "description": "協助團隊做Daocloud POC",
      "logo": "Minimal",
      "link": {
        "label": "kubernetes",
        "href": "#"
      }
    },
    {
      "title": "telegram bot|總結機器人 ",
      "techStack": [
        "telegram bot",
        "python"
      ],
      "description": "可以把Youtube URL 網頁 一段文字做個總結摘要重點整理",
      "logo": "Minimal",
      "link": {
        "label": "bot",
        "href": "https://github.com/tbdavid2019/Telegram-bot-summary"
      }
    },
    {
      "title": "telegram bot|台股機器人 ",
      "techStack": [
        "telegram bot",
        "C#"
      ],
      "description": "台灣股票報價",
      "logo": "Minimal",
      "link": {
        "label": "bot",
        "href": "https://t.me/oli_billion_bot"
      }
    },
    {
      "title": "telegram bot| LLM和工具機器人|Serverless ",
      "techStack": [
        "telegram bot",
        "javascript"
      ],
      "description": "Claude,gpt-4o,台股,美股,字典",
      "logo": "Minimal",
      "link": {
        "label": "bot",
        "href": "https://github.com/tbdavid2019/Telegram-bot-Workers"
      }
    },
    {
      "title": "telegram bot| LLM和工具機器人 ",
      "techStack": [
        "telegram bot",
        "python"
      ],
      "description": "GPT 自然語言機器人",
      "logo": "Minimal",
      "link": {
        "label": "bot",
        "href": "https://t.me/oli_cerebellum_bot"
      }
    },
    {
      "title": "NUEIP 上下班自動打卡小腳本",
      "techStack": [
        "shell",
        "HRM"
      ],
      "description": "上下班自動打卡小腳本",
      "logo": "Minimal",
      "link": {
        "label": "shell",
        "href": "https://github.com/tbdavid2019/nueip_crack"
      }
    },
    {
      "title": "LINE BOT|機器人天氣占卜與LLM",
      "techStack": [
        "shell",
        "HRM"
      ],
      "description": "提供天氣警報、占卜、LLM功能",
      "logo": "Minimal",
      "link": {
        "label": "Line",
        "href": "https://liff.line.me/1645278921-kWRPP32q/?accountId=728wsrjq"
      }
    },
    {
      "title": "解答之書 api",
      "techStack": [
        "shell",
        "HRM"
      ],
      "description": "提供解答之書 api 功能 中英文版",
      "logo": "Minimal",
      "link": {
        "label": "api",
        "href": "http://answerbook.david888.com/"
      }
    },
    {
      "title": "隨機唐詩 api",
      "techStack": [
        "shell",
        "HRM"
      ],
      "description": "提供唐詩 api 功能",
      "logo": "Minimal",
      "link": {
        "label": "api",
        "href": "http://answerbook.david888.com/TangPoetry"
      }
    },
    {
      "title": "隨機淺草籤 API",
      "techStack": [
        "shell",
        "HRM"
      ],
      "description": "隨機淺草籤API 功能",
      "logo": "Minimal",
      "link": {
        "label": "api",
        "href": "http://answerbook.david888.com/TempleOracleJP"
      }
    },
    {
      "title": "GRE 單字 API:",
      "techStack": [
        "shell",
        "HRM"
      ],
      "description": "GRE 單字 API:",
      "logo": "Minimal",
      "link": {
        "label": "api",
        "href": "http://answerbook.david888.com/greWord"
      }
    },
    {
      "title": "Chrome Extension- 小濃縮 (Quick Summary):",
      "techStack": [
        "shell",
        "HRM"
      ],
      "description": "Chrome Extension- 小濃縮 (Quick Summary):",
      "logo": "Minimal",
      "link": {
        "label": "Chrome Extension",
        "href": "https://chromewebstore.google.com/detail/%E5%B0%8F%E6%BF%83%E7%B8%AE-quick-summary/ilgegilcecmgnomacgjiklmhfgioekof?authuser=0&hl=zh-TW"
      }
    },
    {
      "title": "LINE BOT| 小濃縮",
      "techStack": [
        "shell",
        "HRM"
      ],
      "description": "LINE BOT| 小濃縮",
      "logo": "Minimal",
      "link": {
        "label": "Line",
        "href": "https://liff.line.me/1645278921-kWRPP32q/?accountId=032trcev"
      }
    },
    {
      "title": "Chrome Extension- Random GRE Word 隨機單字複習器",
      "techStack": [
        "shell",
        "HRM"
      ],
      "description": "Chrome Extension- Random GRE Word 隨機單字複習器",
      "logo": "Minimal",
      "link": {
        "label": "Chrome Extension",
        "href": "https://chromewebstore.google.com/detail/random-gre-word-%E9%9A%A8%E6%A9%9F%E5%96%AE%E5%AD%97%E8%A4%87%E7%BF%92%E5%99%A8/mpbkdjjihhjjhmlnchkbpgfclhhdblap?hl=zh-TW&utm_source=ext_sidebar"
      }
    }
  ],
} as const;
