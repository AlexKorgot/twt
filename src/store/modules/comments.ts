import {Comment} from '@/data/comment';
import store from "../../store/index"
class CommentState {
  public comments = [];
}

export class CommentModule {
  public state = new CommentState();

  public mutations = {
    SET_COMMENT: (state: any, payload: Comment) => {
      state.comments.push(payload);
    },
  };
  public actions = {
    async setComment(context: any, payload: Comment) {
      let self = this;
      context.commit('SET_COMMENT', payload);
      await payload.userMessageGenerator();
    },
  };
  public getters = {
    getComments: (state: any) => {
      return state.comments;
    },
  };
}
