/*
package: deep-fried-memes

This is a simple example of a deep-fried meme generator.
*/

const imgPath = process.argv[2];
const path = require("path");
const ext = path.extname(imgPath);
const isImage = ext === ".jpg" || ext === ".jpeg" || ext === ".png";
if (!isImage) {
  console.log(`skipping ${imgPath}`);
  return;
}

const Jimp = require("jimp");

const deepFry = (index) => {
  Jimp.read(imgPath).then((image) => {
    // final path = ./deep-fried-memes/df_${basename}_${index}.${ext}
    const finalPath = path.join(
      __dirname,
      "deep-fried-memes",
      `df_${path.basename(imgPath, ext)}_${index}${ext}`
    );

    image
      .color([{ apply: "saturate", params: [100] }])
      .contrast(1)
      .quality(1)
      .posterize(0.5)
      .color([{ apply: "hue", params: [Math.floor(Math.random() * 360)] }])
      .displace(image, 1 + Math.floor(Math.random() * 15))
      .color([{ apply: "saturate", params: [100] }])
      // .dither565()
      .color([{ apply: "hue", params: [Math.floor(Math.random() * 360)] }])
      .write(finalPath);

    console.log(`successfullly deep-fried - ${index} - ${imgPath}`);
  });
};

for (let i = 1; i <= 1; i++) {
  deepFry(i);
}