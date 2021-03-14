import S3Client from "aws-sdk/clients/s3";
import chromium from "chrome-aws-lambda";

const s3 = new S3Client();

exports.main = async (event) => {
  // Get url from query string
  const url = event.queryStringParameters.url;

  // Launch a headless browser
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
  });

  // Take a screenshot
  const page = await browser.newPage();
  await page.goto(url);
  const buffer = await page.screenshot();

  // Upload screenshot to S3
  const result = await s3
    .upload({
      Bucket: process.env.BUCKET_NAME,
      Key: `${Date.now()}.png`,
      Body: buffer,
      ContentType: "image/png",
      ACL: "public-read",
    })
    .promise();

  // Return uploaded image url
  return { url: result.Location };
};
