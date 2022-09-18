export const isEmpty = (val: any) => {
    if (val == undefined) {
        return true
    }
    if (val == null) {
        return true
    }
    if (Array.isArray(val)) {
        return val.length == 0
    }
    if (typeof val === 'string') {
        return val.length == 0
    }
    return false
}

export const isNotEmpty = (val: any) => {
    return !isEmpty(val)
}