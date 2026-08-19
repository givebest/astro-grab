import { instrumentAstroFile } from "./parser.js";
import type { ResolvedEditorPolicyConfig } from "../shared/index.js";

export const transformAstroFile = async (
  code: string,
  id: string,
  root?: string,
  editorPolicy?: ResolvedEditorPolicyConfig,
): Promise<{ code: string } | null> => {
  if (!id.endsWith(".astro")) {
    return null;
  }

  if (id.includes("node_modules")) {
    return null;
  }

  try {
    return await instrumentAstroFile(code, id, root, { editorPolicy });
  } catch (error) {
    console.error(`[astro-grab] Error transforming ${id}:`, error);
    return { code };
  }
};
