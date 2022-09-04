import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import PostCard from "./components/PostCard";
import PostDetail from "./components/PostDetail";
import WritePost from "./components/WritePost";
import Post from "./types/post";

function App() {
  const posts: Post[] = useSelector((state: any) => state.posts);

  const orderedPost = posts
    .slice()
    .sort((a: Post, b: Post) => b.timestamp.localeCompare(a.timestamp));

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Box maxWidth="container.xl" margin="auto">
            <Text
              fontSize="xxx-large"
              fontWeight="extrabold"
              textAlign="center"
              marginTop="9"
            >
              SNS 테스트
            </Text>
            <Link to="/posts/new">
              <Button ml="10" colorScheme="whatsapp">
                새 글 작성
              </Button>
            </Link>
            <Grid gridTemplateColumns={["1fr"]} gridGap="10" padding="10">
              {orderedPost.map((post: Post) => (
                <GridItem key={post.id}>
                  <PostCard post={post} />
                </GridItem>
              ))}
            </Grid>
          </Box>
        }
      />
      <Route path="/posts/:postId" element={<PostDetail />} />
      <Route path="/posts/new" element={<WritePost />} />
      <Route path="/posts/:postId/edit" element={<WritePost />} />
    </Routes>
  );
}

export default App;
