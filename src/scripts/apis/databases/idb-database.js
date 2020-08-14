import { openDB } from 'idb';
import ExceptionMessages from '../../globals/ExceptionMessages';

class IdbDatabase {
  constructor({ databaseName = 'default-db', databaseVersion = 1 } = {}) {
    this._databaseName = databaseName;
    this._databaseVersion = databaseVersion;
  }

  createNewObjectStore({ objectStoreName = 'default', objectStoreConfig = {} } = {}) {
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
      throw new Error(ExceptionMessages.Apis.Database.INVALID_VALUE_SPECIFICATION_WITH_ERR(error));
    }
  }

  async get({ objectStoreName = 'default', key } = {}) {
    if (!key) {
      throw new Error(ExceptionMessages.Apis.Database.EMPTY_KEY_PARAMETER_GET_ERR);
    }

    try {
      const database = await this._open();
      return await database.get(objectStoreName, key);
    } catch (error) {
      throw new Error(ExceptionMessages.Apis.Database.GENERIC_GET_WITH_ERR(error));
    }
  }

  async getAll({ objectStoreName = 'default' } = {}) {
    try {
      const database = await this._open();
      return await database.getAll(objectStoreName);
    } catch (error) {
      throw new Error(ExceptionMessages.Apis.Database.GENERIC_GET_ALL_WITH_ERR(error));
    }
  }

  async delete({ objectStoreName = 'default', key } = {}) {
    if (!key) {
      throw new Error(ExceptionMessages.Apis.Database.EMPTY_KEY_PARAMETER_DELETE_ERR);
    }

    try {
      const database = await this._open();
      await database.delete(objectStoreName, key);
    } catch (error) {
      throw new Error(ExceptionMessages.Apis.Database.GENERIC_DELETE_WITH_ERR(error));
    }
  }

  _open() {
    return openDB(this._databaseName, this._databaseVersion);
  }
}

export default IdbDatabase;
