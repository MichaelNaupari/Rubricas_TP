import { RubricInterface } from './rubric.interface';

// export interface JsonbinCreateResponseInterface {
//     id: string;
//     data: RubricInterface;
// }

export interface JsonbinCreateResponseInterface {
    record: any;
    metadata: MetadataRubricCreated;
}

export interface MetadataRubricCreated {
    id : string,
    createdAt : Date,
    private : boolean
}
