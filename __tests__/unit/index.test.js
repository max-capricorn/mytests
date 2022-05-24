import { add } from '../../src/sum.js'
import { promiseAll, promiseAllSettled } from '../../src/promise.function'


/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
describe('函数api', () => {
  test('1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3)
  });
})

describe('promiseAll', () => {
  test('promise all', () => {
    let p1 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(1)
      }, 1000)
    })
    let p2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(2)
      }, 2000)
    })
    let p3 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(3)
      }, 3000)
    })
    return promiseAll([p1, p2, p3]).then(data => {
      expect(data).toStrictEqual([1, 2, 3])
    })
  });
})

describe('promiseAllSettled', () => {
  test('promise allsettled', () => {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];
    return promiseAllSettled(promises).then(data => {
      expect(data).toStrictEqual([{
        status: "fulfilled",
        value: 3
      }, {
        reason: "foo",
        status: "rejected"
      }])
    })
  });
})
