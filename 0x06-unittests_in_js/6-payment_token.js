const getPaymentTokenFromAPI = (success) => {
    if (success) {
        return new Promise((resolve, reject) => {
            resolve({data: 'Successful response from thr API'});
        })
    }
};

module.exports = getPaymentTokenFromAPI;