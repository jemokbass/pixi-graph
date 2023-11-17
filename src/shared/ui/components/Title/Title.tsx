import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Title({ children }: Props) {
  return <h1>{children}</h1>;
}
