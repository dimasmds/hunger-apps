import { it } from '@jest/globals';
import ExceptionMessages from '../../../../src/scripts/globals/ExceptionMessages';

const itActsAsDatabaseModel = (database, objectStoreName) => {
  it('should put single data correctly', async () => {
    await database.put({
      objectStoreName,
      value: {
        id: 1,
        name: 'John Doe',
      },
    });

    await expect(database.get({
      objectStoreName,
      key: 1,
    }))
      .resolves
      .toStrictEqual({
        id: 1,
        name: 'John Doe',
      });
  });

  it('should throw error when put single data which not meet specification', async () => {
    await expect(database.put({
      objectStoreName,
      value: {
        name: 'John Doe',
      },
    }))
      .rejects
      .toThrow();
  });

  it('should throw replace old data when put a single data with id already exists', async () => {
    await database.put({
      objectStoreName,
      value: {
        id: 1,
        name: 'John Doe',
      },
    });

    await database.put({
      objectStoreName,
      value: {
        id: 1,
        name: 'Dimas Saputra',
      },
    });

    await expect(database.getAll({ objectStoreName }))
      .resolves
      .toStrictEqual([{
        id: 1,
        name: 'Dimas Saputra',
      }]);
  });

  it('should throw error when get single data without key', async () => {
    await database.put({ objectStoreName, value: { id: 1 } });

    await expect(database.get({ objectStoreName }))
      .rejects
      .toThrow(ExceptionMessages.Apis.Database.EMPTY_KEY_PARAMETER_GET_ERR);
  });

  it('should get all data correctly', async () => {
    await database.put({ objectStoreName, value: { id: 1 } });
    await database.put({ objectStoreName, value: { id: 2 } });

    await expect(database.getAll({ objectStoreName }))
      .resolves
      .toStrictEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should delete single data correctly', async () => {
    await database.put({ objectStoreName, value: { id: 1 } });
    await database.put({ objectStoreName, value: { id: 2 } });

    await database.delete({ objectStoreName, key: 1 });
    await expect(database.getAll({ objectStoreName }))
      .resolves
      .toStrictEqual([{ id: 2 }]);
  });

  it('should throw error when delete single data without key', async () => {
    await database.put({ objectStoreName, value: { id: 1 } });

    await expect(database.delete({ objectStoreName }))
      .rejects
      .toThrow(ExceptionMessages.Apis.Database.EMPTY_KEY_PARAMETER_DELETE_ERR);
  });
};

export default itActsAsDatabaseModel;
