export type NirfReport = {
  year: number;
  overallReport: string;
  engineeringReport: string;
};

export const nirfReports: NirfReport[] = [
  {
    year: 2024,
    overallReport: '/docs/NIRF_Overall_2024.pdf',
    engineeringReport: '/docs/NIRF_Engineering_2024.pdf',
  },
  {
    year: 2023,
    overallReport: '/docs/NIRF_Overall_Report_2023.pdf',
    engineeringReport: '/docs/NIRF_Engineering_Report_2023.pdf',
  },
];
