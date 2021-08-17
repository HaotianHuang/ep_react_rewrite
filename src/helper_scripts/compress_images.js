const compress_images = require("compress-images");
let INPUT_PATH = "../images/feed/process/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}"
let OUTPUT_PATH = "../images/feed/compress_build/"

compress_images(INPUT_PATH, OUTPUT_PATH, { compress_force: false, statistic: true, autoupdate: true }, false,
    {jpg: {engine: 'tinify', key: "sefdfdcv335fxgfe3qw", command: false}},
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
function (error, completed, statistic) {
console.log("-------------");
console.log(error);
console.log(completed);
console.log(statistic);
console.log("-------------");
}
);

// https://www.npmjs.com/package/compress-images

// jpegoptim - ['--all-progressive', '-d'] To use jpegoptim you must npm install jpegoptim-bin --save
// { jpg: {engine: 'jpegtran', command: ['-trim', '-progressive', '-copy', 'none', '-optimize']}},
// { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
// { jpg: {engine: 'jpegRecompress', command: ['--quality', 'high', '--min', '60']}},
// { jpg: {engine: 'guetzli', command: ['--quality', '84']}},