import "@toast-ui/editor/dist/toastui-editor.css";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { AsyncSelect } from "chakra-react-select";
import { Editor } from "components/Editor";
import { Header } from "components/Header";

export default function NewPage() {
  return (
    <>
      <Header />
      <Flex
        w="100%"
        maxW={["320px", "480px", "768px", "1024px"]}
        mx="auto"
        mt="6"
        px="10px"
        gap="6"
        direction="column"
      >
        <Heading as="h1">새 글 작성</Heading>
        <FormControl>
          <FormLabel>제목</FormLabel>
          <Input w="100%" />
        </FormControl>
        <Flex gap="3">
          <FormControl>
            <FormLabel>스터디</FormLabel>
            <AsyncSelect
              chakraStyles={{
                container: (provided) => ({ ...provided, width: "100%" }),
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>프로젝트</FormLabel>
            <AsyncSelect
              chakraStyles={{
                container: (provided) => ({ ...provided, width: "100%" }),
              }}
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel>내용</FormLabel>
          <Editor
            initialEditType="markdown"
            useCommandShortcut
            previewStyle="vertical"
            previewHighlight={false}
          />
        </FormControl>
        <Flex justifyContent="end" gap="3">
          <Button colorScheme="red">취소</Button>
          <Button colorScheme="blue">등록</Button>
        </Flex>
      </Flex>
    </>
  );
}
