function handler(name, payload) {
    console.log("Function:", name)
    var input = JSON.parse(payload);
    console.log("Input:", input.a, input.b);
}

handler(process.argv[2], process.argv[3]);