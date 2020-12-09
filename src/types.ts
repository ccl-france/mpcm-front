// Strapi base types
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string | null;
}

export interface Image extends CreatedUpdatedInfos {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: null; // TODO
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null; // TODO
  provider: string;
  provider_metadata: null; // TODO
}

// "Linking" types
export interface CreatedUpdatedInfos {
  created_at: string;
  updated_at: string;
  created_by: User;
  updated_by: User;
}

// Strapi pages
export interface Home extends CreatedUpdatedInfos {
  title: string;
  subtitle: string;
  manifesto: string;
  mainButton: Link;
  hiw: HowItWorks;
}

// Strapi components
export interface Link {
  href: string;
  text: string;
}

export interface HowItWorks {
  title: string;
  intro: string;
  steps: Array<{
    label: string;
    text: string;
    image: Image;
  }>;
}
