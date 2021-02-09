import https from "https";

export async function main() {
  const weather = await checkSFWeather();
  console.log(weather.consolidated_weather[0]);
  return {};
}

function checkSFWeather() {
  return new Promise((resolve, reject) =>
    https
      .get("https://www.metaweather.com/api/location/2487956/", (resp) => {
        let data = "";

        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => resolve(JSON.parse(data)));
      })
      .on("error", (err) => reject(err))
  );
}
