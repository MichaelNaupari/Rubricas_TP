import { RubricInterface } from '../../object-interfaces/rubric.interface';

export const defaultRubricsArray: Array<RubricInterface> = [
  
];

export const defaultRubricIds = defaultRubricsArray.reduce(
    (arr: Array<string>, def: RubricInterface) => {
        if (def.uuid !== undefined) {
            arr.push(def.uuid);
        }

        return arr;
    },
    []
);
