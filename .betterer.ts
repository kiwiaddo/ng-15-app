import { angular } from '@betterer/angular';
import { regexp } from '@betterer/regexp';

export default {
  'stricter template compilation': () =>
        angular('./tsconfig.json', {
          strictTemplates: true
        })
        .include('./src/**/*.ts', './src/**/*.html'),
  'no-foo-bar': () =>
      regexp(/<foo-bar.*?>/s)
      .include('src/**/*.html')
};

