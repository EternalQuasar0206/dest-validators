export function checkObject(object:object) {
    if(Array.isArray(object)) {
        return "<array>";
    }
    else {
        if(object.toString() === "[object Object]") {
            return "<pObject>";
        }
    }
}