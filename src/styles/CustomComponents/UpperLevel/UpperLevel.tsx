import { ArrowLeft } from "@phosphor-icons/react";

import { MaxWidth } from "../MaxWidth";
import { PageIconLink } from "../PageIconLink";

interface UpperLevelProps {
  href: string;
  label: string;
}

export function UpperLevel({ href, label }: UpperLevelProps) {
  return (
    <MaxWidth>
      <PageIconLink
        href={href}
        icon={<ArrowLeft size={18} weight="bold" />}
        label={label}
      />
    </MaxWidth>
  );
}
