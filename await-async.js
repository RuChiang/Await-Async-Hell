const testFunc = require('./testFunc');
const tests = ['noPromise','noPromiseWithTimeout', 'explicitPromise', 'explicitPromiseWithTimeout'];


async function startTest(){
  let idx;
  for(let i = 0; i < tests.length; i++){
    test = tests[i];
    let res = await testFunc[`${test}`]();
    console.log(`=====================`);
  }
}


startTest();
