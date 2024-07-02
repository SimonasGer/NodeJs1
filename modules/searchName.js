const { error } = require("console");

module.exports = (items, query) => {
    const answer = items.filter((item) => item.productName === query.productName);
    if (answer.length >= 1){
        return answer;
    } else if (!query){
        return{
            error: "Product not provided"
        }
    } else {
        return{
            answer: "No products found"
        }
    }
}

// Api sukurkite nauja enpointa:
// api/search/name
// kurio pagalba galima surasti preke pagal pavadinima
// url: http://127.0.0.1:8080/api/search/?name=Stacionarus