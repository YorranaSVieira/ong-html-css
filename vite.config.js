// Configuração do build de produção (Vite)
// Executar: npm run build  ->  gera a pasta dist/ com CSS, JS e HTML minificados
import { defineConfig } from 'vite';
import { cpSync } from 'node:fs';
import { minify } from 'html-minifier-terser';

// Minifica o HTML final (espaços, quebras de linha, comentários, <script> e <style> inline)
const minificarHtml = () => ({
  name: 'minificar-html',
  enforce: 'post',
  async generateBundle(_, bundle) {
    for (const arquivo of Object.values(bundle)) {
      if (arquivo.type === 'asset' && arquivo.fileName.endsWith('.html')) {
        arquivo.source = await minify(String(arquivo.source), {
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true,
        });
      }
    }
  },
});

// As imagens usadas dentro de template literals do JS (pages.js) não são
// reescritas pelo bundler, então a pasta imagem/ é copiada inteira para dist/.
const copiarImagens = () => ({
  name: 'copiar-imagens',
  closeBundle() {
    cpSync('imagem', 'dist/imagem', { recursive: true });
  },
});

export default defineConfig({
  base: './', // caminhos relativos: o site funciona em qualquer subpasta
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: 'html/index.html',
        projetos: 'html/projetos.html',
        cadastro: 'html/cadastro.html',
      },
    },
  },
  plugins: [minificarHtml(), copiarImagens()],
});
