import 'fake-indexeddb/auto';
import IdbDatabase from '../../../src/scripts/apis/databases/idb-database';
import itActsAsDatabaseModel from './contract/DatabaseContract';

describe('Idb Database', () => {
  describe('With Object Store Params', () => {
    const database = new IdbDatabase();
    database.createNewObjectStore({
      objectStoreName: 'users',
      objectStoreConfig: { keyPath: 'id' },
    });

    itActsAsDatabaseModel(database, 'users');
  });
});
