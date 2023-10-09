export default function $_GET(param: string, url?: string): any {
    if (url === undefined) {
        return new URLSearchParams(window.location.search).get(param);
    } else if (url === null) {
        return undefined;
    } else {
        return new URLSearchParams(url.split("/").reverse()[0]).get(param);
    }
}

