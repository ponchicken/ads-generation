export function getCartesian (object) {
  return Object.entries(object).reduce((r, [k, v]) => {
    var temp = []
    r.forEach(s =>
      (Array.isArray(v) ? v : [v]).forEach(w =>
        (w && [w]).forEach(x =>
          temp.push(Object.assign({}, s, { [k]: x }))
        )
      )
    )
    return temp
  }, [{}])
}

export const skipEmptyArrays = (obj) => {
  const result = {}
  Object.entries(obj).forEach(([key, val]) => {
    if (val && val.length) result[key] = val
  })
  return result
}

export const skipEmptyProps = (obj) => {
  const result = {}
  Object.entries(obj).forEach(([key, val]) => {
    if (val !== undefined) result[key] = val
  })
  return result
}

export const downloadFromUrl = (url) => {
  if (url) {
    const link = document.createElement('a')
    link.href = url
    link.download = 'creatives.zip'
    link.click()
  }
}
