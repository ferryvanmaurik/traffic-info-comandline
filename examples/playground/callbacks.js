//https://maps.googleapis.com/maps/api/geocode/json?address=3402DC%20aldrinhof%205%20ijsselstein

var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Ferry'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
    
};

getUser(31, (userObj) => {
    console.log(userObj)
});

