const knex = require('../config/knex.config');
// const logger = require('some-logging-library');

const testSqlite = async (info) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await knex('test').insert({ test: info }).returning('*');
      console.log(result);
      resolve(result);
    } catch (error) {
      console.log(error);
    }
  });
};

const GetInfo = async () => {
  try {
    const result = await knex('test').select('*');
    if (result.length === 0) {
      throw new Error('No test data found in the database.');
      // reject('No test data found in the database.');
    }

    result.map((item) => {
      item.test = JSON.parse(item.test || '{}');
      // logger.debug(item.test);
      // logger.info(item.test.data);
      // console.log(item.test);
      // console.log(item.test.data);
    });
    // console.log(result[0].test);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  GetInfo,
  testSqlite,
};
