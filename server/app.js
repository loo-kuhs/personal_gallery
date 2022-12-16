import express, { json } from "express";
import { createServer } from "http";
import cors from "cors";
import {
  getImages,
  buscarImagen,
  getPathImages,
} from "./handler/image-handler.js";
import {
  parseMetadata,
  filterMetadata,
  readMetadata,
} from "./utils/image-metadata.js";
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const log = console.log;
const app = express();
const server = createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use("/img", express.static("images"));

app.get("/", (req, res) => {
  res.status(401).json({ info: "Unauthorized" });
});

app.get("/images", async (req, res) => {
  try {
    const files = getImages();

    res.setHeader("Content-Type", "application/json");

    res.status(200).json(
      files.map((file) => {
        const metadata = readMetadata(
          `${getPathImages()}\\${file.split(".")[0]}.png`
        );
        const filteredMetadata = filterMetadata(metadata);
        const parsedMetadata = parseMetadata(filteredMetadata);

        return {
          id: parseInt(file.split(".")[0]),
          url: `http://localhost:3000/images/${file}`,
          metadata: filteredMetadata,
          parsedMetadata: parsedMetadata,
        };
      })
    );
    log(`Total image files ${files.length} from ${getPathImages()}`);
  } catch (error) {
    res.status(500).json({ error: "Error while loading image" });
    log(error);
  }
});

app.get("/images/:imageId", async (req, res) => {
  const { imageId } = req.params;
  const imagenData = await buscarImagen(imageId);

  res.status(200).sendFile(`${getPathImages()}\\${imageId}`);

  /* if (imagenData) {
    res.status(200).send(
      `<img src="data:image/png;base64,${imagenData.toString("base64")}" />`
    );
  } else {
    res.status(404).json({ error: "Image not found." });
  } */
});

server.listen(port, () => {
  log(`Server running on port ${port}`);
});
