import { checkObject } from './checkObject';

export class DestPrimitiveValidators {
    types = {
        string: "PrimitiveString",
        boolean: "PrimitiveBoolean",
        number: {
            float: "FloatingNumber",
            int: "FloatingInteger"
        },
        object: {
            array: "ObjectArray",
            primitive: "ObjectObject",
            map: "ObjectMap",
            set: "ObjectSet"
        }
    }
    check(target:any) {
        switch(typeof target) {
            case "string":
                return this.types.string;
            
            case "boolean":
                return this.types.boolean;

            case "number":
                if(this.checkForFloatingNumber(target)) {
                    return this.types.number.float;
                }
                else if(this.checkForIntegerNumber(target)) {
                    return this.types.number.int;
                }
                break;

            case "object":
                switch(checkObject(target)) {
                    case "<array>":
                        return this.types.object.array;
                    
                    case "<pObject>":
                        return this.types.object.primitive;
                    
                    case "<mapObject>":
                        return this.types.object.map;
                    
                    case "<setObject>":
                        return this.types.object.set;
                }
        }
        return null;
    }

    checkForFloatingNumber(num:number) {
        return Number(num) === num && num % 1 !== 0;
    }

    checkForIntegerNumber(num:number) {
        return Number.isInteger(num);
    }
}