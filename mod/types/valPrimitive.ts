import { checkObject } from './checkObject';

interface PrimitiveCheckObject {
    objectType: string;
    object: any
}

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
    /* 
        check() returns the main type of target, it will determine the main instance 
        based on JavaScript primitive types/constructors 
    */
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
                        return {
                            objectType: this.types.object.array,
                            object: target
                        } as PrimitiveCheckObject;
                    
                    case "<pObject>":
                        return {
                            objectType: this.types.object.primitive,
                            object: target
                        } as PrimitiveCheckObject;
                    
                    case "<mapObject>":
                        return {
                            objectType: this.types.object.map,
                            object: target
                        } as PrimitiveCheckObject;
                    
                    case "<setObject>":
                        return {
                            objectType: this.types.object.set,
                            object: target
                        } as PrimitiveCheckObject;
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

    getIterableIntegrity(target:object) {
        //Todo: not finished
        return {} as object;
    }
}