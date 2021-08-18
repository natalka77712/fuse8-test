const filterByTitle = (arr, str) => {
    const regEx = new RegExp(str, 'i')

    const filteredArr = arr.filter((item) => {
        if (item.hasOwnProperty('title')) return regEx.test(item.title)
        return false
    })

    return filteredArr
}

export default filterByTitle
