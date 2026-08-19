export type {
  SourceLocation,
  SnippetResponse,
  ClientConfig,
  ClientState,
  EditorPolicyConfig,
  AstroGrabOptions,
} from "./types.js";

export {
  DEFAULT_EDITOR_POLICY_AREA_ONLY_VALUE,
  DEFAULT_EDITOR_POLICY_ATTRIBUTE,
  DEFAULT_EDITOR_POLICY_LOCKED_VALUE,
  DEFAULT_TEMPLATE,
} from "./types.js";

export {
  resolveEditorPolicyConfig,
  type ResolvedEditorPolicyConfig,
} from "./editor-policy.js";

export {
  ASTRO_GRAB_TOOLBAR_STORAGE_KEY,
  DEFAULT_TRIGGER_KEY,
  formatPlatformShortcutDisplayLabel,
  formatShortcutDisplayLabel,
  getStoredTriggerKey,
  isTriggerKeyValid,
  normalizeTriggerKey,
  parseTriggerKey,
} from "./shortcut.js";

export {
  encodeSourceLocation,
  decodeSourceLocation,
  normalizePath,
  extractSnippet,
} from "./utils.js";
