md5 = require('js-md5');

module.exports.templateTags = [{
    name: "randomhash",
    displayName: "Random Hash",
    description: "A random hash string",

    async run(context) {
        return md5(new Date() + Math.random);
    }
}]