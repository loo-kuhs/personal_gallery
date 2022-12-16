import { readdirSync, promises } from "fs";
import path, { join } from "path";
import { fileURLToPath } from "url";

export function getPathImages() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const directoryPath = join(__dirname, "..\\img");
  return directoryPath;
}

export function getImages() {
  const directoryPath = getPathImages();
  const files = readdirSync(directoryPath);

  const images = files.filter((file) => {
    return file.match(/\.(jpg|jpeg|png|gif)$/);
  });

  return images;
}

export async function buscarImagen(imagenId) {
  const directoryPath = getPathImages();
  const files = getImages();

  if (files.includes(imagenId)) {
    return await promises.readFile(join(directoryPath, imagenId));
  } else {
    return null;
  }
}
