import { Profile } from './profile.model';

export interface Comment {
  slug: string;
  id: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  sender: Profile;
}
