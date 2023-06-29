import { Box, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useConfigurator } from "../hooks/useConfigurator";

export const Interface = () => {
  const { legs, setLegs } = useConfigurator();
  return (
    <Stack
      textColor={"white"}
      pos={"fixed"}
      top={8}
      right={8}
      minW={200}
      userSelect={"none"}
    >
      <Box
        backgroundColor={"blackAlpha.600"}
        paddingY={4}
        paddingX={8}
        rounded="2xl"
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Legs
        </Text>
        <RadioGroup
          onChange={(value) => setLegs(parseInt(value))}
          value={"" + legs}
        >
          <Stack direction="column" spacing={4} mt={4}>
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
};
