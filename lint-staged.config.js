export default {
  '**/*.{ts,tsx}': [
    () => 'tsc -p tsconfig.json --noEmit',
    'yarn lint',
  ],
};
