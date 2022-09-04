import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Post from "../types/post";
import { getTimeAgo } from "../utils/date";
import { trimContent } from "../utils/post";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Box
      borderRadius="md"
      boxShadow="xl"
      padding="5"
      backgroundColor={useColorModeValue("gray.50", "gray.700")}
    >
      <Link to={`/posts/${post.id}`}>
        <VStack spacing="4">
          <Box width="100%">
            <Flex alignItems="flex-end" width="100%" height="100%">
              <Avatar size="md" src={post.profileImageUrl} />
              <Box marginLeft="3">
                <Text as="h1" fontSize="lg" fontWeight="bold">
                  by Anonymous
                </Text>
                <Text as="p" fontSize="sm">
                  {getTimeAgo(post.timestamp)}
                </Text>
              </Box>
            </Flex>
          </Box>
          <Text
            width="100%"
            fontSize="md"
            textAlign="left"
            whiteSpace="pre-wrap"
          >
            {trimContent(post.content)}
          </Text>
        </VStack>
      </Link>
      <Flex justify="space-between">
        <Box>{/*뭔가 들어갈 자리*/}</Box>
        <Box>
          <Link to={`/posts/${post.id}/edit`}>
            <Button mt="3" colorScheme="whatsapp" ml="auto">
              수정
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default PostCard;
