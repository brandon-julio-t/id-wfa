export type Company = {
  name: string;
  imageUrl: string;
  jobOpeningsUrl: string;
  jobOpeningsFeedUrl?: string; // Optional, used if the page implement a feed for the job openings
};

export type JobOpening = {
  jobTitle: string;
  url: string; // url to the job opening detail page, fallback to jobOpeningsUrl if none exists
  company: Company['name'];
  departmentName: string; // Engineering, Design, etc.

  // The properties below are optional
  level?: string; // Junior, Mid, Senior, etc.
  employmentType?: 'Full-time' | 'Contract';
  location?: string;
  description?: string;
  publishedAt?: string;
};
