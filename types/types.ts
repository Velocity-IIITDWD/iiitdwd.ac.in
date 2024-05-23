interface TenderDocument {
  link: string;
  title: string;
}

interface Tender {
  cancelled: boolean;
  corrections: TenderDocument[];
  documents: TenderDocument[];
  link: string;
  publishDate: string;
  submissionDeadline: string;
  title: string;
  updatedAt: number;
}
