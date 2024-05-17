
export default function pathChecking(path:string|null, match:string|null):boolean {
    if (path && match) {
        if (path === match) {
            return true;
        }
        return false;
    }
    return false;
}