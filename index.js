const Calculate = {
    sum(numArr){
        if(numArr.length === 0){
            return 0;
        }
        return numArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
};

module.exports = Calculate;