import { Box, Text } from "@chakra-ui/react";
import { Study } from "types/strapi";

type Props = {
  study: Study;
};

export function StudyCard({ study }: Props) {
  return (
    <Box w="100%" p="6" shadow="xl" rounded="2xl">
      <Text fontWeight="bold" fontSize="2xl">
        {study.attributes.name}
      </Text>
      <Text
        mt="4"
        color="gray.500"
        fontSize="sm"
        overflow="hidden"
        textOverflow="ellipsis"
        noOfLines={3}
      >
        {study.attributes.description}
      </Text>
    </Box>
  );
}
