const Calculate = {
    sum(numArr){
        let res = 0;
        numArr.forEach((element) => res += element);
        return res;
    }
};

module.exports = Calculate;