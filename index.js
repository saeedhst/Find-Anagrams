const data = [
    'rope', 'pore', 'repo',
    'red rum', 'murder',
    'listen', 'silent',
    'endeavour',
    '10sa eed', '01 sa e e d', 'saeed 10', 'saeed 01', 'saed10'
];

const findAnagrams = (list) => {
    let result = {};

    list.forEach(word => {
        const key = word
            .split('')
            .filter(char => char !== ' ')
            .sort()
            .join('');
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(word);
    });
    result = Object.values(result);
    console.log(result);
    return result;
}

findAnagrams(data);

module.exports = {
    findAnagrams
}