import { BettererTest } from '@betterer/betterer';
import { angular } from '@betterer/angular';
import { smaller } from '@betterer/constraints';

export default {
  'stricter template compilation': () =>
        angular('./tsconfig.json', {
          strictTemplates: true
        })
        .include('./src/*.ts', './src/*.html')
};

