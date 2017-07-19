const fb = require('fuse-box');

const fuse = fb.FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  cache: false,
  plugins: [
    fb.TypeScriptHelpers()
  ]
});

fuse.dev({
  port: 44444
});

fuse.bundle('polyfills').target("browser").instructions('> polyfills.ts');
fuse.bundle('vendor').target("browser").instructions(' ~ main.ts');
fuse.bundle('app').target("browser").sourceMaps(true).instructions(' !> [main.ts]').hmr();

fuse.run();
