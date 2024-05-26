export type linkstype = {

    curr_year   : number;
    Overall_Report_curr: string;
    Engineering_Report_curr: string;
    
    prev_year  : number;
    Overall_Report_prev: string;
    Engineering_Report_prev: string;
         
    
  };
  
  export const linksdata: linkstype[] =[{
    curr_year: 2024,
    "Overall_Report_curr":"https://iiitdwd.ac.in/docs/nirf/NIRF_Overall_2024.pdf",
    "Engineering_Report_curr":"https://iiitdwd.ac.in/docs/nirf/NIRF_Engineering_2024.pdf",

    
    prev_year: 2023,
    "Overall_Report_prev": "https://iiitdwd.ac.in/docs/nirf/NIRF_Overall_Report_2023.pdf",
    "Engineering_Report_prev":"https://iiitdwd.ac.in/docs/nirf/NIRF_Engineering_Report_2023.pdf"
  }]