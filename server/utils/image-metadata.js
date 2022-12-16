import pkg from "png-metadata";
const png = pkg;

export function readMetadata(imageUrl) {
  const readData = png.readFileSync(imageUrl);
  const metadata = png.splitChunk(readData);
  return metadata;
}

export function filterMetadata(metadata) {
  return metadata.slice(1, 2);
}

export function parseMetadata(metadata) {
  const data = metadata[0].data;
  const regex =
    /parameters(.*)Negative prompt:(.*)Steps: (\d+), Sampler: (.*), CFG scale: (\d+), Seed: (\d+), Size: (\d+x\d+), Model hash: (.*)/;
  const string = data.toString();
  const match = string.match(regex);
  const obj = {
    parameters: match?.[1],
    negative_prompt: match?.[2],
    Steps: parseInt(match?.[3]),
    Sampler: match?.[4],
    cfg_scale: parseInt(match?.[5]),
    Seed: match?.[6],
    Size: match?.[7],
    model_hash: match?.[8],
  };
  return obj;
}