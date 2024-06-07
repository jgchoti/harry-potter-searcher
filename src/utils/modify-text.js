export const modifyText = (text = 'hello_hi') => {
    text = text
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    return text
}