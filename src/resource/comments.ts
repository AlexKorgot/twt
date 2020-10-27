import {UserComment} from '@/data/comment';
import {IComment} from '@/data/common';

export default class CommentsResource {
  public static getComments(): Promise<IComment> {
    const payload = {
      name: 'Friends Cat',
      message: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
      image: 'https://i.artfile.ru/4500x3514_903167_[www.ArtFile.ru].jpg',
    } as UserComment;
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(new UserComment(payload));
        }, 1000);
    });
  }
}
