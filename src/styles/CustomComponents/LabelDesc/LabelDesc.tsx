import { HorizontalStack } from "../HorizontalStack";
import { Text } from "../Text";

interface LabelDescProps {
  label: string;
  desc: string;
}

export function LabelDesc({ label, desc }: LabelDescProps) {
  return (
    <HorizontalStack gap=".5rem">
      <Text variant="dark" bold>
        {label}:
      </Text>
      <Text variant="dark">{desc}</Text>
    </HorizontalStack>
  );
}
