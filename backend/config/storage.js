const admin = require("firebase-admin");
const serviceAccount = require("../pchat-2442c-firebase-adminsdk-rfbd2-e39586eda9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "pchat-2442c.appspot.com",
});

const bucket = admin.storage().bucket();

exports.uploadImage = async (img) => {
  const isPictureValid = img.match(/[^:/]\w+(?=;|,)/);
  let avatar;
  if (isPictureValid) {
    const mimeType = isPictureValid[0];
    const base64Image = img.split(";base64,").pop();
    const buffer = Buffer.from(base64Image, "base64");
    const fileName = `${Date.now()}.${mimeType}`;

    const file = bucket.file(fileName);
    await file.save(buffer, {
      metadata: {
        contentType: `image/${mimeType}`,
      },
    });

    avatar = `https://firebasestorage.googleapis.com/v0/b/${
      bucket.name
    }/o/${encodeURIComponent(fileName)}?alt=media`;
  }

  return avatar;
};
