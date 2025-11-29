export interface DownloadItem {
  id: string;
  title: string;
  version: string;
  url: string;
  description?: string;
  type: 'xash' | 'other';
}