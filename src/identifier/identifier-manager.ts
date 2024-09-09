import {IdentifierList} from "./identifier-list.ts";
import {Identifier} from "./identifier.ts";

class IdentifierManagerMaker<ArrayIdentifier extends Array<Identifier<string>>> {
    private readonly identifierList: ArrayIdentifier;

    constructor(identifierList: ArrayIdentifier) {
        this.identifierList = identifierList;
    }

    getList(): ArrayIdentifier {
        return this.identifierList;
    }
}

export const IdentifierManager = new IdentifierManagerMaker(IdentifierList);
