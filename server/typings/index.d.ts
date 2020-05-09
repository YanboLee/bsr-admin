import 'egg';

declare module 'egg' {
  interface mysql {
    get(tableName: String, find: {}): Promise<Any>

    query(sql: String, values: Any[]): Promise<Any>

    insert(tableName: String, find: {}): Promise<Any>

    select(tableName: String, find: {}): Promise<Any>

    update(tableName: String, find: {}, find: {}): Promise<Any>

    delete(tableName: String, find: {}): Promise<Any>
  }
  interface Application {
    mysql: mysql;
  }
}