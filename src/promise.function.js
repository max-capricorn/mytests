export const promiseAll = (arr) => {
  return new Promise((resolve, reject) => {
    let len = arr.length,
      resultCount = 0,
      resultArr = [];
    for (let i = 0; i < len; i++) {
      Promise.resolve(arr[i]).then(data => {
        resultCount++
        resultArr[i] = data
        if (resultCount === len) return resolve(resultArr)
      })
    }
  })
}


export const promiseAllSettled = (promises) => {
  return new Promise((resolve, reject) => {
    let len = promises.length,
      resCount = 0,
      result = [];
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(data => {
        resCount++
        result[i] = {
          status: "fulfilled",
          value: data
        }
        if (resCount === len) {
          resolve(result)
        }
      }).catch(err => {
        resCount++
        result[i] = {
          status: "rejected",
          reason: err
        }
        if (resCount === len) {
          resolve(result)
        }
      })
    }
  })
}