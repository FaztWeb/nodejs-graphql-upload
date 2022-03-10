const { createWriteStream } = require("fs");
const { parse, join } = require("path");

/**
 * upload a Single File
 * @param {Object} file the file to upload
 * @returns {Promise<String>} the URL of the file
 */
const readFile = async (file) => {
  const { createReadStream, filename } = await file;
  const stream = createReadStream();
  let { ext, name } = parse(filename);
  name = `single${Math.floor(Math.random() * 10000 + 1)}`;
  let url = join(__dirname, `../../uploads/${name}-${Date.now()}${ext}`);
  console.log({url})
  const imageStream = createWriteStream(url);
  await stream.pipe(imageStream);
  const baseUrl = process.env.BASE_URL;
  const port = process.env.PORT;
  url = `${baseUrl}:${port}${url.split("uploads")[1]}`;
  return url;
};

const multipleFileUploads = async (files) => {
  let fileURLs = [];

  for (let i = 0; i < files.length; i++) {
    // exact same code for single upload
    const { createReadStream, filename } = await files[i];
    const stream = createReadStream();
    let { ext, name } = parse(filename);
    name = `single${Math.floor(Math.random() * 10000 + 1)}`;
    let url = join(__dirname, `../../uploads/${name}-${Date.now()}${ext}`);
    const imageStream = createWriteStream(url);
    await stream.pipe(imageStream);
    const baseUrl = process.env.BASE_URL;
    const port = process.env.PORT;
    url = `${baseUrl}:${port}${url.split("uploads")[1]}`;
    fileURLs.push({ url });
  }
  return fileURLs;
};

module.exports = {
  readFile,
  multipleFileUploads,
};
