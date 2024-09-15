const response = http.post('https://httpbin.org/anything', {
    multipartForm: {
        imagefile: {
            filePath: "maestro.png",
        },
        name: "logo"
    }
})

console.log(JSON.stringify(response.body, null, 2));