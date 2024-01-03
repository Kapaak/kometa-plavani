import { PropsWithChildren } from "react";

import { ControlledSwitch, Flex, Text, VerticalStack } from "~/styles";

interface CookieSetingsItemProps {
  title: string;
  name: string;
}

export function CookieSetingsItem({
  title,
  name,
  children,
}: PropsWithChildren<CookieSetingsItemProps>) {
  return (
    <Flex direction="row">
      <VerticalStack>
        <Text variant="dark" bold>
          {title}
        </Text>
        <Text variant="dark">{children}</Text>
      </VerticalStack>
      <ControlledSwitch name={name} />
    </Flex>
  );
}
