export interface Fact {
  id: number;
  title: string;
  fact: string;
  category: string;
  image_url: string | null;
  source: string | null;
  published: boolean;
  created_at: string | null;
}