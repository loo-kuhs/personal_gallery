// TODO: Create random IDS for images response.
class GenerateId {
  constructor() {
    this.id = 0;
  }

  generate() {
    this.id += 1;
    return this.id;
  }
}

export default GenerateId;