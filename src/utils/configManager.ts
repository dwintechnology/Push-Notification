import { SERVER_CONFIG } from '../config';

interface IServerConfig {
    baseURL: string;
    port: string;
    logDir: string;
    logLevel: string;
    httpsKeyFile?: string;
    httpsCertFile?: string;
    httpsCaFiles?: any;
    saltRounds: number,
    jwtSecret: string,
    tokenExpireTime: string,
    host: string,
    privateKey: string,
    publicKey: string
}

interface ISwaggerDefintionInfo {
    title: string;
    version: string;
    description: string;
}

interface ISwaggerDefintion {
    info: ISwaggerDefintionInfo;
    host: string;
    basePath: string;
}

interface ISwaggerConfig {
    swaggerDefinition: ISwaggerDefintion;
    apis: string[];
}

interface IDatabaseConfig {
    database: string;
    host: string;
    password: string;
    port: number;
    user: string;
}

interface IIpStackConfig {
    apiKey: string;
}

interface IFirebaseConfig {
  url: string;
  serverKey: string
}

interface IEnvConfig {
    server: IServerConfig;
    swagger: ISwaggerConfig;
    db: IDatabaseConfig;
    ipStack: IIpStackConfig;
    firebase: IFirebaseConfig;
}

const DEFAULT_DB_CONFIG: IDatabaseConfig = {
    database: 'push_notifications',
    host: 'localhost',
    password: 'postgres',
    port: 5432,
    user: 'postgres',
};

const DEFAULT_IP_STACK_CONFIG: IIpStackConfig = {
  apiKey: 'd8991100ca2f9c2',
};
 const DEFAULT_IP_FIREBASE_CONFIG: IFirebaseConfig= {
  url: 'https://fcm.googleapis.com/fcm/send',
  serverKey: 'AAA7zIK57OpTVwNlp1VcVJk0N7oDgJO7LC77b1E65Cc-ku3fvniUgEk68WhaVyxZoVdQrcb6onLABC',
 }

const DEFAULT_SERVER_CONFIG: IServerConfig = {
    baseURL: '/api/v2',
    logDir: 'server-log-dev',
    logLevel: 'debug',
    port: '8080',
    saltRounds: 2,
    jwtSecret: "yo-its-a-secret",
    tokenExpireTime: "6h",
    host: "http://localhost:4200/",
    privateKey: 'qicC0GcMNHA1dpHaj0',
    publicKey: 'BK3Q7j8fc96aFZOH_bsjr3uRuQPTd77SRP3DI'
};


const DEFAULT_SWAGGER_DEFINITION = {
    info: {
        title: 'Api bots',
        version: '0.0.1',
        description: 'RESTful API',
    },
    host: 'localhost:8400',
    basePath: '/',
};

const DEFAULT_SWAGGER_CONFIG = {
    // import swaggerDefinitions
    swaggerDefinition: DEFAULT_SWAGGER_DEFINITION,
    // path to the API docs
    apis: ['./**/routes/*.js', 'routes.js'],// pass all in array
};

class ConfigManager {

    public static getInstance() {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    private static instance: ConfigManager;
    private envConfig: IEnvConfig;
    private env: string;

    private constructor() {
        this.env = process.env.NODE_ENV || 'development';
        const currentEnvConfig = SERVER_CONFIG[this.env];
        if (currentEnvConfig as IEnvConfig) {
            this.envConfig = currentEnvConfig;
            return;
        }
        this.envConfig = {
            db: DEFAULT_DB_CONFIG,
            server: DEFAULT_SERVER_CONFIG,
            swagger: DEFAULT_SWAGGER_CONFIG,
            ipStack: DEFAULT_IP_STACK_CONFIG,
            firebase: DEFAULT_IP_FIREBASE_CONFIG
        };
    }

    public getConfigManager(): IEnvConfig {
        return this.envConfig;
    }

    public getDatabaseConfig() {
        return this.envConfig.db;
    }

    public getServerConfig(): IServerConfig {
        return this.envConfig.server;
    }

    public isProduction(): boolean {
        return 'production' === this.env;
    }

    public getEnv(): string {
        return this.env;
    }

    public getHttpsKeyFile() {
        return this.getServerConfig().httpsKeyFile;
    }

    public getHttpsCertFile() {
        return this.getServerConfig().httpsCertFile;
    }

    public getHttpsCaFiles() {
        return this.getServerConfig().httpsCaFiles;
    }

    public getSwaggerConfig(): ISwaggerConfig {
        return this.envConfig.swagger;
    }

    public getIpStackConfig(): IIpStackConfig {
      return this.envConfig.ipStack;
  }

  public getFirebaseConfig(): IFirebaseConfig {
    return this.envConfig.firebase;
}
}

export { ConfigManager };
