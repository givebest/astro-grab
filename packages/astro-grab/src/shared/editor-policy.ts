import {
  DEFAULT_EDITOR_POLICY_AREA_ONLY_VALUE,
  DEFAULT_EDITOR_POLICY_ATTRIBUTE,
  DEFAULT_EDITOR_POLICY_LOCKED_VALUE,
} from "./types.js";
import type { EditorPolicyConfig } from "./types.js";

export interface ResolvedEditorPolicyConfig {
  attribute: string;
  lockedValue: string;
  areaOnlyValue: string;
}

export const resolveEditorPolicyConfig = (
  config: EditorPolicyConfig = {},
): ResolvedEditorPolicyConfig => ({
  attribute: config.attribute ?? DEFAULT_EDITOR_POLICY_ATTRIBUTE,
  lockedValue: config.lockedValue ?? DEFAULT_EDITOR_POLICY_LOCKED_VALUE,
  areaOnlyValue: config.areaOnlyValue ?? DEFAULT_EDITOR_POLICY_AREA_ONLY_VALUE,
});
