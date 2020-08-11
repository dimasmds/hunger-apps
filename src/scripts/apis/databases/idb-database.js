import { openDB } from 'idb';

class IdbDatabase {
  constructor({ databaseName = 'default-db', databaseVersion = 1 } = {}) {
    this._databaseName = databaseName;
    this._databaseVersion = databaseVersion;
  }

  createNewObjectStore({ objectStoreName = 'default', objectStoreConfig = {} } = {}) {
    console.log(objectStoreName);
    console.log(objectStoreConfig);
    return openDB(this._databaseName, this._databaseVersion, {
      upgrade(database) {
        database.createObjectStore(objectStoreName, objectStoreConfig);
      },
    });
  }

  async put({ objectStoreName = 'default', value = {} } = {}) {
    try {
      const database = await this._open();
      await database.put(objectStoreName, value);
    } catch (error) {
      throw new Error(`Value not meet specification to put to database see: ${error}`);
    }
  }

  async get({ objectStoreName = 'default', key } = {}) {
    if (!key) {
      throw new Error('Please specify key to get a single data');
    }

    try {
      const database = await this._open();
      return await database.get(objectStoreName, key);
    } catch (error) {
      throw new Error(`Failed to get single data, see: ${error}`);
    }
  }

  async getAll({ objectStoreName = 'default' } = {}) {
    try {
      const database = await this._open();
      return await database.getAll(objectStoreName);
    } catch (error) {
      throw new Error(`Failed to get all data, see: ${error}`);
    }
  }

  async delete({ objectStoreName = 'default', key } = {}) {
    if (!key) {
      throw new Error('Please specify key to delete a single data');
    }

    try {
      const database = await this._open();
      await database.delete(objectStoreName, key);
    } catch (error) {
      throw new Error(`Failed to delete single data, see: ${error}`);
    }
  }

  _open() {
    return openDB(this._databaseName, this._databaseVersion);
  }
}

export default IdbDatabase;
