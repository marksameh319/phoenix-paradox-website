import { IGameFeature } from "./IGameFeature";

export interface IGameCardDialogData {
  title: string;
  description: string;
  imageUrl: string;
  releaseDate?: string;
  genre: string;
  features: IGameFeature[];
  trailerUrl?: string;
  note: string;
  steamUrl?: string;
  PlayStoreUrl?: string;
  AppStoreUrl?: string;
  themeColor?: string;
  themeBtnClass?: string;
}