import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bootstrap-x',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      dir: 'output'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
