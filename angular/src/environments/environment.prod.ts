import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'lms',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44397',
    redirectUri: baseUrl,
    clientId: 'lms_App',
    responseType: 'form',
    scope: 'offline_access lms',
  },
  apis: {
    default: {
      url: 'https://localhost:44397',
      rootNamespace: 'Dft.lms',
    },
  },
} as Environment;
