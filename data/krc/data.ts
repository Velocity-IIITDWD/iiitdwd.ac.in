export interface LinkData {
    title: string;
    description: string;
    accessInfo: string;
    buttonText: string;
    link: string; // Add a new property for the link URL
  }
  
  export const linkData: LinkData[] = [
    {
      title: "SpringerLink",
      description: "Provides access to 1700 e-journals",
      accessInfo: "(Accessible only on institute network)",
      buttonText: "Explore",
      link: "https://link.springer.com", // Example link URL
    },
    {
      title: "DELNET",
      description: "Developing Library Network . Provides access to e-books, e-articles & e-journalss",
      accessInfo: "(Accessible only on institute network & remote access)",
      buttonText: "Explore",
      link: "https://delnet.in/index.html", // Example link URL
    },
    {
      title: "KRC Catalog",
      description: "Provides information on available books",
      accessInfo: "(Accessible only on institute network)",
      buttonText: "Explore",
      link: "http://192.168.40.108:7001/cgi-bin/koha/opac-main.pl", // Example link URL
    },

  ];
  