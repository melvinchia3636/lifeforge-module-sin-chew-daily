export type EndpointList_OutputOK = {
  id: number;
  time_display: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}[];

export interface Contract {
  list: EndpointList;
  getContent: EndpointGetContent;
}
export interface EndpointList {
  method: "get";
  input: {
    query?: EndpointList_InputQuery;
  };
  output: {
    OK: EndpointList_OutputOK;
  };
  media: null;
}
export interface EndpointList_InputQuery {
  type:
    | "latest"
    | "headline"
    | "hot"
    | "domestic:latest"
    | "domestic:realtime"
    | "domestic:editor-choice"
    | "domestic:hot"
    | "domestic:society"
    | "domestic:education"
    | "domestic:chinese-society"
    | "domestic:headline"
    | "domestic:warm-action"
    | "domestic:mixed"
    | "domestic:politics"
    | "domestic:truth-seeking"
    | "international:latest"
    | "international:worldwide"
    | "international:headline"
    | "international:international-platter"
    | "international:explore-the-world"
    | "finance:latest"
    | "finance:spotlight"
    | "finance:international"
    | "entertainment:latest"
    | "entertainment:foreign"
    | "entertainment:msia"
    | "local:johor:focus"
    | "local:johor:singapore"
    | "local:johor:eye"
    | "local:johor:mixed"
    | "local:metropolis:headline"
    | "local:metropolis:dynamic"
    | "local:metropolis:interesting"
    | "local:metropolis:story"
    | "local:metropolis:perspective"
    | "local:perak:focus"
    | "local:perak:special-column"
    | "local:perak:dynamic"
    | "local:perak:school"
    | "local:perak:society"
    | "local:perak:people"
    | "supplement:topic"
    | "supplement:lifestyle"
    | "supplement:travel"
    | "supplement:food"
    | "supplement:column"
    | "supplement:things"
    | "supplement:fashion"
    | "supplement:new-education"
    | "supplement:e-trend"
    | "supplement:arts"
    | "supplement:life-protection"
    | "supplement:car-viewing"
    | "supplement:wellness"
    | "supplement:family"
    | "supplement:people"
    | "supplement:audio-video"
    | "supplement:readers"
    | "supplement:flower-trace"
    | "supplement:creation"
    | "supplement:airasia-news"
    | "xuehai:power-teens"
    | "xuehai:study-record"
    | "xuehai:hou-lang-fang";
  page: string;
  range: "6H" | "24H" | "1W";
}
export interface EndpointGetContent {
  method: "get";
  input: {
    query?: EndpointGetContent_InputQuery;
  };
  output: {
    OK: EndpointGetContent_OutputOK;
  };
  media: null;
}
export interface EndpointGetContent_InputQuery {
  url: string;
}
export interface EndpointGetContent_OutputOK {
  title: string;
  time: string;
  content: string;
}
