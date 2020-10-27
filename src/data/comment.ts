import {IComment} from '@/data/common';
import randomizer from '@/data/generator';
import moment from 'moment';
import CommentsResource from '@/resource/comments';
import store from "../store/index"


export class Comment implements IComment {
  private static sortable(a: IComment, b: IComment) {
  if (a.timestamp && b.timestamp ) {
    if (a.timestamp < b.timestamp ) { return 1; }
    if (a.timestamp === b.timestamp) { return 0; }
    if (a.timestamp > b.timestamp) { return -1; }
  }
  }
  userComments?: IComment[];
  name: string;
  image: string;
  message: string;
  date: string;
  timestamp: number;
  constructor(options: IComment, isUserComments: boolean) {
    this.name = options.name;
    this.image = options.image;
    this.message = options.message;
    this.date = options.date;
    this.timestamp = moment().unix();
    if (isUserComments) {
     this.userComments = [];
   }
  }
  public async userMessageGenerator() {
    setInterval(async () => {
      await CommentsResource.getComments().then((data: IComment) => {
        if (this.userComments) {
          this.userComments.push(data);
          // @ts-ignore
          this.userComments.sort(Comment.sortable);
          store.commit('REPLACE', this.userComments)
        }
      });
    }, randomizer(2000, 29000));
  }
}

export class UserComment extends Comment {
  timestamp: number;
  constructor(options: IComment) {
    super(options, false);
    this.date = moment().format('DD-MM-YYYY HH:mm:ss');
    this.timestamp = moment().unix();
  }
}
