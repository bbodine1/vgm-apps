import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run cleaning-calculator:serve:development',
        production: 'nx run cleaning-calculator:serve:production',
      },
      ciWebServerCommand: 'nx run cleaning-calculator:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
