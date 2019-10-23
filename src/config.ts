export const SERVER_CONFIG = {
  development: {
    server: {
      baseURL: '/api/v1',
      logDir: 'server-log-dev',
      logLevel: 'debug',
      port: '8080',
      saltRounds: 2,
      jwtSecret: "yo-its-a-secret",
      tokenExpireTime: "6h",
      host: "http://localhost:4200/",
    },
    firebase: {
      url: 'https://fcm.gogleapis.com/fcm/send',
      serverKey: 'AAAAs6Kt2Uo:AgRE5RN3RITBqeI3vbmDFNIEaF8ksf2xQOssuMPwaELCDOcQlYssX5hBJfH8mFzX_dV2x7FnfNVrHA2mvIdRHPAYtpgRnocarZpMfx',
    },
    ipStack: {
      apiKey: 'd89ec8df91100ca2f9c2',
    },
    db: {
      database: 'push_notifications',
      host: 'localhost',
      password: 'asas',
      port: 3306,
      user: 'asas',
    },
    swagger: {
      // import swaggerDefinitions
      swaggerDefinition: {
        info: {
          title: 'Push Notification',
          version: '0.0.1',
          description: 'RESTfull API',
        },
        host: 'localhost:8080',
        basePath: '/',
      },
      // path to the API docs
      apis: ['./**/routes/*.js', 'routes.js'], // pass all in array
    }
  },
  production: {
    server: {
      baseURL: '/api/v1',
      httpsCaFiles: [
        'ssl/webpush_cc.ca-bundle',
        'ssl/sslCertificates/COMODORSAAddTrustCA.crt',
      ],
      logLevel: 'debug',
      port: '8443',
      saltRounds: 2,
      jwtSecret: "yo-its-a-secret",
      tokenExpireTime: "6h",
      host: "http://localhost:4200/",
      privateKey: 'fPpxF9m_4nH4AOrjiieFJY',
      publicKey: 'BA7JasdJJWhU8VX5e7wtrC_JYzcQP_t5clwszGBLtH7c8RXrKbt2zRGk'
    },
    ipStack: {
      apiKey: 'd8905b867ca33d5ec8df91100ca2f9c2',
    },
    firebase: {
      url: 'https://fcmm/send',
      serverKey: 'AAAAqeI3vbmDFNIEaF8ksf2xQOssuMPwaELCDOcQlYssX5hBJfH8mFzX_dV2x7FnfNVrHA2mvIdRHPAYtpgRnocarZpMfx',
    },
    db: {
      database: 'push_notifications',
      host: 'localhost',
      password: 'rloot',
      port: 3306,
      user: 'roljhvhbot'
    },
    swagger: {
      // import swaggerDefinitions
      swaggerDefinition: {
        info: {
          title: 'Push Notification',
          version: '0.0.1',
          description: 'RESTful API',
        },
        host: 'zzpush.cc',
        basePath: '/',
      },
      // path to the API docs
      apis: ['./**/routes/*.js', 'routes.js'], // pass all in array
    }
  },
};