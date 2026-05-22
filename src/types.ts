import { TypeScriptRules, VueRules } from '@antfu/eslint-define-config';

export type Overrides = TypeScriptRules & VueRules;

export interface Options {
  /**
   * The globs to ignore lint
   */
  ignores?: string[];
  /**
   * The rules to override the default ones.
   */
  overrides?: Partial<Overrides>;
  /**
   * Glob patterns for Vue files.
   *
   * Default to `['**‍/*.vue']`.
   */
  files?: string[];
}
