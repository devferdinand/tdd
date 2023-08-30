const Calculate = {
    sum(numArr){
        return numArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
};

module.exports = Calculate;