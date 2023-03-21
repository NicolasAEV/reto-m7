import pkg from 'pg';
const {Pool} = pkg;

const pool = new Pool({
    host: '',
    database: '',
    port: 5432,
    user: '',
    password: '',
    max: 5,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 2000,
  })
export default pool;