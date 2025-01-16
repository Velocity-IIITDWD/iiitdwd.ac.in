interface TenderDocument {
  link: string;
  title: string;
}
interface TenderDocumentCorrections {
  link: string;
  title: string;
  isNew?: boolean;
}

interface Tender {
  cancelled: boolean;
  corrections: TenderDocumentCorrections[];
  documents: TenderDocument[];
  link: string;
  publishDate: string | number;
  submissionDeadline: string | number;
  title: string;
  updatedAt: number;
}
