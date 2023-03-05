export type ListResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type Response<T> = {
  data: T;
};

export type Study = {
  id: number;
  attributes: {
    name: string;
    year: number;
    semester: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    description: string | null;
  };
};

export type Project = {
  id: number;
  attributes: {
    name: string;
    year: number;
    semester: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    github_url: string | null;
    description: string | null;
  };
};

export type Post = {
  id: number;
  attributes: {
    Title: string;
    content: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    study: {
      data: Study | null;
    };
    project: {
      data: Project | null;
    };
  };
};
