class DestPrimitiveValidators {
    types = {
        string: "PrimitiveStringObject",
        boolean: "PrimitiveBooleanObject",
        number: {}
    }
    check(target) {
        switch(typeof target) {
            case "string":
                return this.types.string;
            
            case "boolean":
                return this.types.boolean;

            case "number":
                return;
        }
    }

    checkForFloatingNumber(num) {
        return Number(num) === n && n % 1 !== 0;
    }

    checkForIntegerNumber(num) {
        return Number.isInteger(num);
    }
}