export function calcImageFit (isCover) {
  return (sourceWidth, sourceHeight, targetWidth, targetHeight) => {
    var scale = isCover
      ? Math.min(sourceWidth / targetWidth, sourceHeight / targetHeight)
      : Math.max(sourceWidth / targetWidth, sourceHeight / targetHeight)

    var x = (sourceWidth / 2) - (targetWidth / 2) * scale
    var y = (sourceHeight / 2) - (targetHeight / 2) * scale
    return {
      x,
      y,
      width: targetWidth * scale,
      height: targetHeight * scale
    }
  }
}

export const contain = calcImageFit(false)
export const cover = calcImageFit(true)
