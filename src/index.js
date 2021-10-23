'use strict';
/**
 *  ╭━━━╮╱╱╭╮╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╱╭╮
 *  ┃╭━━╯╱╭╯╰╮╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱╭╯╰╮
 *  ┃╰━━┳━╋╮╭╋━┳╮╱╭╮┃╰━╯┣━━┳┳━╋╮╭╯
 *  ┃╭━━┫╭╮┫┃┃╭┫┃╱┃┃┃╭━━┫╭╮┣┫╭╮┫┃
 *  ┃╰━━┫┃┃┃╰┫┃┃╰━╯┃┃┃╱╱┃╰╯┃┃┃┃┃╰┳┳┳┳╮
 *  ╰━━━┻╯╰┻━┻╯╰━╮╭╯╰╯╱╱╰━━┻┻╯╰┻━┻┻┻┻╯
 *  ╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
 *  ╱╱╱╱╱╱╱╱╱╱╱╰━━╯
 *
 */
const server = require('./server');
const config = require('./config');

(async () => {
  try {
    const app = await server(config);
    await app.start();

    console.log(`server running at http://${config.host}:${config.port}`);
  } catch (O_O) {
    console.error('Something went totally, wrong', O_O);
  }
})();
