export const modifyLink = (url) => {
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);
    const keyword = searchParams.get('v');
    let embedLink = 'https://www.youtube.com/embed/'
    return embedLink + keyword
}