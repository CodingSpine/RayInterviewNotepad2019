1. setImmediate function can be used instead of setTimeout, if you want a waiting time of 0 milliseconds.
setImmediate(function(){
    console.log("second");
});
