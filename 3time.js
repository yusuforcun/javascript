const date = new Date()

let year = date.getFullYear()

let months = [
    'Ocak',
    'subat',
    'mart',
    'nisan',
    'mayıs',
    'haziran',
    'temmuz',
    'agustos',
    'eylül',
    'ekim',
    'kasım',
    'aralık'
]

let month = date.getMonth()

console.log(months.length)

let humanReadableDate = `${months[month]}`;

console.log(humanReadableDate)