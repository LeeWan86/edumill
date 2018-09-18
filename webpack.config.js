module.exports = {
    entry: {
      login: "./src/tsx/login.tsx",
      //button: "./src/button.tsx",
      //sample
    },
    output: {
        filename: "[name].bundle.js",
        publicPath: "/js/",
        path: __dirname + "/dist/js/"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
