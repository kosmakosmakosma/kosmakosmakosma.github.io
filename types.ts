
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  images: string[];
  latexCode: {
    title: string;
    code: string;
  }[];
}
