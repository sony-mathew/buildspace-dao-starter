import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x16A1817E15BAD453A11B8D1Afb29361CF516E9b5",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "DAOist Eye",
        description: "This NFT will give you access to DAOists aka DAO Makers, Educators, Influencers and all those great bunch who pushes DAO to the limits and spread knowledge and curiosity around!",
        image: readFileSync("scripts/assets/daoist_eye.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()