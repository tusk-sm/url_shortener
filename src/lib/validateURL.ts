export default function validateURL (url:string){
    try {
        const _ = new URL(url);
    } catch (_) {
        return false;  
    }
    return true
}