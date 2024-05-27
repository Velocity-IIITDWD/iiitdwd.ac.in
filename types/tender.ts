interface TenderDocument {
  link: string;
  title: string;
}

interface Tender {
  cancelled: boolean;
  corrections: TenderDocument[];
  documents: TenderDocument[];
  link: string;
  publishDate: string | number;
  submissionDeadline: string | number;
  title: string;
  updatedAt: number;
}
