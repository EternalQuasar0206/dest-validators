export function checkObject(object:any) {
    if(Array.isArray(object)) {
        return "<array>";
    }
    else {
        if(object.toString() === "[object Object]") {
            return "<pObject>";
        }
    }

    var unknownObjectType:unknown = null;
    return unknownObjectType;
}