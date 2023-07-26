export interface PostData {
  title: string;
  date: string;
  tags: string[];
  draft: boolean;
  summary: string;
  contentHtml?: string;
  slug?: string;
}
