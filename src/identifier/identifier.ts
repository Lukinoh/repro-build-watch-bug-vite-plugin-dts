export class Identifier<Id extends string> {
  private readonly id: Id;

  constructor(id: Id) {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }
}
