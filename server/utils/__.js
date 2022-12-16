/* https://regex101.com/r/VWvjkQ/1 */

let str =
  "parameterslnaocooper,((Victorian)), Feminine,((Perfect Face)), ((arms outstretched above head)), ((naked)), ((big bust)), ((Aype Beven)), ((scott williams)) ((jim lee)),((Leinil Francis Yu)), ((Salva Espin)), ((oil painting)), ((transparent clothes)), ((Matteo Lolli)), ((Sophie Anderson)), ((Kris Anka)), (Intricate),(High Detail), (bokeh), (pornography) Negative prompt: ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))) Steps: 60, Sampler: Euler a, CFG scale: 7, Seed: 3629985277, Size: 512x512, Model hash: a25f8995";

let str2 =
  "parametersmer5itto dressed up as D.Va from overwatch, playful, female, beautiful body, detailed face, thighs, gorgeous, amazing, very large boobs, intricate, highly detailed, digital painting by ilya kuvshinov, leonardo da vinci Negative prompt: ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))) Steps: 60, Sampler: Euler a, CFG scale: 16, Seed: 2497789383, Size: 640x704, Model hash: 96517da7";

let str3 =
  "parametersportrait of a arisavurr half elf with bangs (sexy naked:1.33) bride, intricate, elegant, highly detailed, my rendition, oiled body, artstation, concept art, smooth, sharp focus, illustration, painting art by (frank frazetta:1.33) and (boris vallejo:1.44) and Gaston bussiere and artgerm, symmetry!! Negative prompt: ((((ugly)))), (((duplicate))), ((morbid)), ((mutilated)), [out of frame], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck))) Steps: 60, Sampler: Euler a, CFG scale: 7, Seed: 1898740061, Size: 768x832, Model hash: 31024a14, Denoising strength: 0.75, Mask blur: 4";
function parser(string) {
  let obj = {};

  let regex =
    /parameters(.*)Negative prompt:(.*)Steps: (\d+), Sampler: (.*), CFG scale: (\d+), Seed: (\d+), Size: (\d+x\d+), Model hash: (.*)/;
  let match = string.match(regex);

  obj = {
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

console.log(parser(str));
console.log(parser(str2));
console.log(parser(str3));
