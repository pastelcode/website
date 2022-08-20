export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: number;
          createdAt: string | null;
          name: string;
          description: string;
          playStoreLink: string | null;
          appStoreLink: string | null;
          logo: string | null;
          githubLink: string | null;
        };
        Insert: {
          id?: number;
          createdAt?: string | null;
          name: string;
          description: string;
          playStoreLink?: string | null;
          appStoreLink?: string | null;
          logo?: string | null;
          githubLink?: string | null;
        };
        Update: {
          id?: number;
          createdAt?: string | null;
          name?: string;
          description?: string;
          playStoreLink?: string | null;
          appStoreLink?: string | null;
          logo?: string | null;
          githubLink?: string | null;
        };
      };
    };
    Functions: {};
  };
}

