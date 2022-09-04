import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import Post from "../types/post";

const initialState: Post[] = [
  {
    id: "1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profileImageUrl: "https://robohash.org/gundam.png",
    timestamp: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    profileImageUrl: "https://robohash.org/pretty.png",
    timestamp: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: "3",
    content: "1\n2\n3\n4\n5\n6\n\n7",
    profileImageUrl: "https://robohash.org/pretty.png",
    timestamp: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(content) {
        return {
          payload: {
            id: nanoid(),
            content,
            profileImageUrl: "https://robohash.org/pretty.png",
            timestamp: new Date().toISOString(),
          },
          meta: {},
          error: {},
        };
      },
    },
    postEditted(state, action) {
      const { postId, content } = action.payload;
      const post = state.find((post: Post) => post.id === postId);
      if (post) {
        post.content = content;
      }
    },
  },
});

export const { postAdded, postEditted } = postsSlice.actions;

export default postsSlice.reducer;
