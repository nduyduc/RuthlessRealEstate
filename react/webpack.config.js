const path = require("path");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "../"),
        filename: "bundle.js"
    },
    target: "web",
    mode: isDev ? "development" : "production",
    resolve: {
        extensions: [".js", ".scss"],
        alias: {
            "components": path.resolve(__dirname, "src/components/"),
            "containers": path.resolve(__dirname, "src/containers/"),
            "layout": path.resolve(__dirname, "src/layout/"),
            "api": path.resolve(__dirname, "src/api/"),
            "App": path.resolve(__dirname, "src/App/")
        }
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]"
                    }
                }
            }
        ]
    },
    watch: isDev,
    watchOptions: {
        ignored: /node_modules/
    }
};