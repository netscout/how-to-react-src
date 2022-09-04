import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postAdded, postEditted } from "../features/postsSlice";
import Post from "../types/post";

const WritePost = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { postId } = useParams();

  const [onEdit, setOnEdit] = useState(false);
  const [content, setContent] = useState("");

  const post: Post = useSelector((state: any) =>
    state.posts.find((post: Post) => post.id === postId)
  );

  useEffect(() => {
    let _onEdit = !!post;

    if (_onEdit) {
      setContent(post.content);
    }

    setOnEdit(_onEdit);
  }, [post]);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (onEdit) {
      dispatch(postEditted({ postId, content: data.content }));

      history(`/posts/${postId}`);
    } else {
      dispatch(postAdded(data.content));

      history("/");
    }
  });

  return (
    <Box p="10" maxWidth="container.xl" margin="auto">
      <form onSubmit={onSubmit}>
        <FormControl isInvalid={!!errors.content}>
          <FormLabel htmlFor="content">글 내용</FormLabel>
          <Textarea
            id="content"
            placeholder="무슨 생각을 하고 있나요?"
            rows={30}
            {...register("content", {
              required: "글 내용은 필수 항목입니다.",
            })}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <FormErrorMessage>
            {errors.content && (errors.content.message as string)}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt="4"
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          {onEdit ? "수정" : "작성"}
        </Button>
        <Link to="/">
          <Button
            mt="4"
            ml="3"
            colorScheme="pink"
            isLoading={isSubmitting}
            type="button"
          >
            취소
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default WritePost;
