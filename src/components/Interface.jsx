import {
  Box,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useConfigurator } from "../hooks/useConfigurator";

export const Interface = () => {
  const { legs, setLegs, tableWidth, setTableWidth, legsColor, setLegsColor } =
    useConfigurator();
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
          Table width
        </Text>
        <Slider
          value={tableWidth}
          onChange={setTableWidth}
          min={0.5}
          max={2}
          step={0.001}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
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
      <Box
        backgroundColor={"blackAlpha.600"}
        paddingY={4}
        paddingX={8}
        rounded="2xl"
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Legs color
        </Text>
        <RadioGroup onChange={setLegsColor} value={legsColor}>
          <Stack direction="column" spacing={4} mt={4}>
            <Radio value="black">Black</Radio>
            <Radio value="pink">Pink</Radio>
            <Radio value="yellow">Gold</Radio>
            <Radio value="green">Green</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Stack>
  );
};
