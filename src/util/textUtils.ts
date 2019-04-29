export const mirrorKeys = (...args): object => {
    let object = {};
    args.forEach(arg => object[arg] = arg);
    return object;
}