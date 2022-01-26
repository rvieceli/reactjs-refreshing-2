import { memo } from "react";

function LogoComponent() {
  return (
    <span>
      Watch<p>Me</p>
    </span>
  );
}

export const Logo = memo(LogoComponent);
