import lex from 'pug-lexer';
import parse from 'pug-parser';

const fileRegex = /\.(pug)$/;

export default function renderPlugin() {
  return {
    name: 'transform-file',
    transform(src, filename) {
      if (fileRegex.test(filename)) {
        const tokens = lex(src, { filename });
        const ast = parse(tokens, { filename, src });

        const result = {
          code: `export const ast = ${JSON.stringify(
            ast
          )}; export default { ast };`,
          map: null,
        };

        return result;
      }
    },
  };
}
