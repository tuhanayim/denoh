/**
 * All valid Git hooks as a constant array.
 */
export const HOOKS = [
  'applypatch-msg',
  'pre-applypatch',
  'post-applypatch',
  'pre-commit',
  'pre-merge-commit',
  'prepare-commit-msg',
  'commit-msg',
  'post-commit',
  'pre-rebase',
  'post-checkout',
  'post-merge',
  'pre-push',
  'pre-receive',
  'update',
  'proc-receive',
  'post-receive',
  'post-update',
  'reference-transaction',
] as const;

/**
 * Operators object for Logical AND, OR and separator.
 */
export const OPERATORS = {
  AND: '&&',
  OR: '||',
  SEPARATOR: ';',
} as const;
