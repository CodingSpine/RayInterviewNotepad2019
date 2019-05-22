1. setImmediate function can be used instead of setTimeout, if you want a waiting time of 0 milliseconds.
setImmediate(function(){
    console.log("second");
});

2. NodeJS is single-threaded. This is apparently better for handling asynchronous calls.

3. Asynchronous calls are non-blocking events.

4. If you have to debug a huge codebase, and you don't know which Promise can potentially hide an issue, you can use the unhandledRejection hook. It will print out all unhandled Promise rejections.
    process.on('unhandledRejection', (err) => {
        console.log(err)
    })
