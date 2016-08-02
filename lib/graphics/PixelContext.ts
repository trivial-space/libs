import {ColorRGBA, mixColors} from './colors'


export type Position = [number, number]


export function repeatedPosition(
  [x, y]: Position,
  imgData: ImageData
): Position {

    const w = imgData.width
    const h = imgData.height
    if (x >= w) {
      x -= w;
    }
    if (y >= h) {
      y -= h;
    }
    if (x < 0) {
      x += w;
    }
    if (y < 0) {
      y += h;
    }
    return [x, y];
  };


export function closedPosition(
  [x, y]: Position,
  imgData: ImageData
): Position {

    const w = imgData.width;
    const h = imgData.height;
    if (x < 0) {
      x = 0;
    }
    if (y < 0) {
      y = 0;
    }
    if (x >= w) {
      x = w;
    }
    if (y >= h) {
      y = h;
    }
    return [x, y];
  };


function createPixelContext(
  imgData: ImageData,
  adjustPos: (Position, ImageData) => Position
) {

  adjustPos = adjustPos || closedPosition


  function getPixelIndex (pos: Position): number {
    const [x, y] = adjustPos(pos)
    return (y * imgData.height + x) * 4;
  }


  function getColorAt (pos: Position): ColorRGBA {
    const i = getPixelIndex(pos)
    return [
      imgData.data[i],
      imgData.data[i + 1],
      imgData.data[i + 2],
      imgData.data[i + 3]
    ]
  }

  function setColorAt (pos: Position, color: ColorRGBA): void {
    const i = getPixelIndex(pos)
    imgData.data[i] = color[0]
    imgData.data[i + 1] = color[1]
    imgData.data[i + 2] = color[2]
    imgData.data[i + 3] = color[3]
  }


  function increaseAllBy ([r, g, b, a]: ColorRGBA): void {
    const d = imgData.data

    for (let i = 0; i < d.length; i+=4) {
      if (d[i] + r < 256) {
        d[i] += r
      }
      if (d[i + 1] + g < 256) {
        d[i + 1] += g
      }
      if (d[i + 2] + b < 256) {
        d[i + 2] += b
      }
      if (d[i + 3] + a < 256) {
        d[i + 3] += a
      }
    }
  }

  function decreaseAllBy ([r, g, b, a]: ColorRGBA): void {
    const d = imgData.data
    for (let i = 0; i <= d.length; i += 4) {
      if (r <= d[i]) {
        d[i] -= r
      }
      if (g <= d[i + 1]) {
        d[i + 1] -= g
      }
      if (b <= d[i + 2]) {
        d[i + 2] -= b
      }
      if (a <= d[i + 3]) {
        d[i + 3] -= a
      }
    }
  }


  function mixinColor (color: ColorRGBA) {
    for (let x = 0; x < imgData.width; x++) {
        for (let y = 0; x < imgData.height; y++) {
          setColorAt([x, y], mixColors(getColorAt([x, y]), color))
        }
      }
    }
  }



  function replaceWithImageDataAt (pixelCtx, arg) {
    var h, i, j, k, ref, results, w, x, y;
    x = arg[0], y = arg[1];
    w = pixelCtx.width - 1;
    h = pixelCtx.height - 1;
    results = [];
    for (i = k = 0, ref = w; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
      results.push((function() {
        var l, ref1, results1;
        results1 = [];
        for (j = l = 0, ref1 = h; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
          results1.push(this.setColorAt([x + i, y + j], pixelCtx.getColorAt([i, j])));
        }
        return results1;
      }).call(this));
    }
    return results;
  }


  function drawImageAt (pixelCtx, arg) {
    var h, i, j, k, ref, results, w, x, y;
    x = arg[0], y = arg[1];
    w = pixelCtx.width() - 1;
    h = pixelCtx.height() - 1;
    results = [];
    for (i = k = 0, ref = w; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
      results.push((function() {
        var l, ref1, results1;
        results1 = [];
        for (j = l = 0, ref1 = h; 0 <= ref1 ? l <= ref1 : l >= ref1; j = 0 <= ref1 ? ++l : --l) {
          results1.push(setColorAt([x + i, y + j], mixColors(getColorAt([x + i, y + j]), pixelCtx.getColorAt([i, j]))));
        }
        return results1;
      }).call(this));
    }
    return results;
  };


export function createCtxFromImg (img, ContextClass) {
  var c, ctx, imgData;
  c = document.createElement("canvas");
  c.width = img.width;
  c.height = img.height;
  ctx = c.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  imgData = ctx.getImageData(0, 0, img.width, img.height);
  return new ContextClass(imgData);
}
