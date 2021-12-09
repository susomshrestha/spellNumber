const wordsBelowTwenty = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
};

const sayNumberInEnglish = (n /* ADD MORE PARAMETERS IF NEEDED */) => {
    // Write your solution here
    const num = n.toString();

    if (n < 20) {
        return getOnePlace(n);
    }
    switch (num.length) {
        case 2:
            return getTwoPlace(n);
        case 3:
            return getThreePlace(n);
        case 4:
            return getFourPlace(n);
        case 5:
            return getFivePlace(n);
        case 6:
            return getSixPlace(n);
        case 7:
            return getSevenPlace(n);
        case 8:
            return getEightPlace(n);
        case 9:
            return getNinePlace(n);
        case 10:
            return getTenPlace(n);
        case 11:
            return getElevenPlace(n);
        case 12:
            return getTwelvePlace(n);
    }

}

const getTwelvePlace = (n) => {
    return getThreePlace(n / 1000000000) + ' billion ' + getNinePlace(n % 1000000000);
}

const getElevenPlace = (n) => {
    return getTwoPlace(n / 1000000000) + ' billion ' + getNinePlace(n % 1000000000);
}

const getTenPlace = (n) => {
    return getOnePlace(n / 1000000000) + ' billion ' + getNinePlace(n % 1000000000);
}

const getNinePlace = (n) => {
    return getThreePlace(n / 1000000) + ' million ' + getSixPlace(n % 1000000);
}

const getEightPlace = (n) => {
    return getTwoPlace(n / 1000000) + ' million ' + getSixPlace(n % 1000000);
}

const getSevenPlace = (n) => {
    return getOnePlace(n / 1000000) + ' million ' + getSixPlace(n % 1000000);
}

const getSixPlace = (n) => {
    return getThreePlace(n / 1000) + ' thousand ' + getThreePlace(n % 1000);
}

const getFivePlace = (n) => {
    return getTwoPlace(n / 1000) + ' thousand ' + getThreePlace(n % 1000);
}

const getFourPlace = (n) => {
    return getOnePlace(n / 1000) + ' thousand ' + getThreePlace(n % 1000);
}

const getThreePlace = (n) => {
    if (parseInt(n).toString().length < 3) {
        if (parseInt(n).toString().length < 2) {
            return getOnePlace(n);
        }
        return getTwoPlace(n);
    }
    return wordsBelowTwenty[parseInt(n / 100)] + ' hundred ' + getTwoPlace(n % 100);
}

const getTwoPlace = (n) => {
    // console.log(n)
    const eng = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    if (n < 20) {
        return wordsBelowTwenty[parseInt(n)];
    }

    if (parseInt(n).toString().endsWith('0')) {
        return eng[parseInt(n / 10)];
    }
    return eng[parseInt(n / 10)] + '-' + getOnePlace(n % 10);
}

const getOnePlace = (n) => {
    return wordsBelowTwenty[parseInt(n)];
}

console.log(`5635 in english is: ${sayNumberInEnglish(530345)}`)
