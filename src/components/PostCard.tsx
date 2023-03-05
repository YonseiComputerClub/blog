import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { Post } from "types/strapi";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  return (
    <Box w="100%" p="6" shadow="xl" rounded="2xl">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontWeight="bold" fontSize="2xl">
          {post.attributes.Title}
        </Text>
        <Flex gap="2">
          {post.attributes.study.data && (
            <Badge>스터디 | {post.attributes.study.data.attributes.name}</Badge>
          )}
          {post.attributes.project.data && (
            <Badge>
              프로젝트 | {post.attributes.project.data.attributes.name}
            </Badge>
          )}
        </Flex>
      </Flex>
      <Text
        mt="4"
        color="gray.500"
        fontSize="sm"
        overflow="hidden"
        textOverflow="ellipsis"
        noOfLines={3}
      >
        {post.attributes.content}
      </Text>
    </Box>
  );
}
