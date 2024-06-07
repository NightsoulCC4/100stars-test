interface Config {
  connectionLimit: number;
  host: string;
  user: string;
  password: string;
  port: number;
  database: string;
}

const config: Config = {
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "100stars",
};

export default config;
