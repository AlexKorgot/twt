
export interface ObjectInfo {
  value?: string;
  label: string;
}
export interface IField extends ObjectInfo {}
export interface IButton extends ObjectInfo {}

export interface IComment {
  name: string;
  image: string;
  message: string;
  date: string;
  timestamp?: number;
}
export interface IDiscussion {
  message: string;
  commentsNum: number;
}
