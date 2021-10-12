class DestPrimitiveValidators {
    types = {
        string: "PrimitiveString",
        boolean: "PrimitiveBoolean",
        number: {
            float: "FloatingNumber",
            int: "FloatingInteger"
        }
    }
    check(target) {
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
                
        }
    }

    checkForFloatingNumber(num) {
        return Number(num) === n && n % 1 !== 0;
    }

    checkForIntegerNumber(num) {
        return Number.isInteger(num);
    }
}