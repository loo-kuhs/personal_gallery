const obj = {
  parameters:
    "lnaocooper,((Victorian)), Feminine,((Perfect Face)), ((arms outstretched above head)), ((Aype Beven)), ((scott williams)) ((jim lee)),((Leinil Francis Yu)), ((Salva Espin)), ((oil painting)), ((transparent clothes)), ((Matteo Lolli)), ((Sophie Anderson)), ((Kris Anka)), (Intricate),(High Detail), (bokeh),",
  "Negative prompt":
    "((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck)))",
  Steps: 60,
  Sampler: "Euler a",
  "CFG scale": 7,
  Seed: "3808997361",
  Size: "512x512",
  "Model hash": "a25f8995",
};

//let str = "parameterslnaocooper,((Victorian)), Feminine,((Perfect Face)), ((arms outstretched above head)), ((Aype Beven)), ((scott williams)) ((jim lee)),((Leinil Francis Yu)), ((Salva Espin)), ((oil painting)), ((transparent clothes)), ((Matteo Lolli)), ((Sophie Anderson)), ((Kris Anka)), (Intricate),(High Detail), (bokeh), Negative prompt: ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))) Steps: 60, Sampler: Euler a, CFG scale: 7, Seed: 3650905737, Size: 512x512, Model hash: a25f8995";

let objeto = {};

let parametersIndex = str.indexOf("parameters");
let negativePromptIndex = str.indexOf("Negative prompt:");
let stepsIndex = str.indexOf("Steps:");
let samplerIndex = str.indexOf("Sampler:");
let cfgScaleIndex = str.indexOf("CFG scale:");
let seedIndex = str.indexOf("Seed:");
let sizeIndex = str.indexOf("Size:");
let modelHashIndex = str.indexOf("Model hash:");

objeto.parameters = str.substring(parametersIndex + 10, negativePromptIndex);
objeto["Negative prompt"] = str.substring(negativePromptIndex + 16, stepsIndex);
objeto.Steps = parseInt(str.substring(stepsIndex + 6, samplerIndex));
objeto.Sampler = str.substring(samplerIndex + 9, cfgScaleIndex);
objeto["CFG scale"] = parseInt(str.substring(cfgScaleIndex + 10, seedIndex));
objeto.Seed = str.substring(seedIndex + 5, sizeIndex);
objeto.Size = str.substring(sizeIndex + 5, modelHashIndex);
objeto["Model hash"] = str.substring(modelHashIndex + 12);

console.log(objeto);


let str =
  "parameterslnaocooper,((Victorian)), Feminine,((Perfect Face)), ((arms outstretched above head)), ((naked)), ((big bust)), ((Aype Beven)), ((scott williams)) ((jim lee)),((Leinil Francis Yu)), ((Salva Espin)), ((oil painting)), ((transparent clothes)), ((Matteo Lolli)), ((Sophie Anderson)), ((Kris Anka)), (Intricate),(High Detail), (bokeh), (pornography) Negative prompt: ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))) Steps: 60, Sampler: Euler a, CFG scale: 7, Seed: 870645315, Size: 512x512, Model hash: a25f8995";

function parser(string) {
  let obj = {};

  let regex =
    /parameters(.*)Negative prompt:(.*)Steps: (\d+), Sampler: (.*), CFG scale: (\d+), Seed: (\d+), Size: (\d+x\d+), Model hash: (.*)/;
  let match = string.match(regex);

  obj.parameters = match[1];
  obj["Negative prompt"] = match[2];
  obj.Steps = parseInt(match[3]);
  obj.Sampler = match[4];
  obj["CFG scale"] = parseInt(match[5]);
  obj.Seed = match[6];
  obj.Size = match[7];
  obj["Model hash"] = match[8];

  return obj;
}

console.log(parser(str));
