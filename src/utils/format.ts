import type { ModelInput } from "@/types";

export function yesNo(value: boolean): string {
  return value ? "Sí" : "No";
}

export function inputsLabel(input: ModelInput[]): string {
  return input.length >= 4 ? "Omni" : input.join(", ");
}
