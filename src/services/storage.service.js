require("dotenv").config();
const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    // publicKey: "your_public_key",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    // urlEndpoint: "https://your_url_endpoint"
});

async function uploadfile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });

    return result;
}

module.exports = uploadfile;
