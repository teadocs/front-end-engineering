'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "前端工程化",
        description: "前端工程化指南",
        version: "v0.0.1",
        dir: "",
        outDir: "",
        staticDir: ""
    }, 
    theme: {
        dir: "", 
        title: "",
        headHtml: "",
        footHtml: "",
        isMinify: true,
        rootPath: "/"
    },
    nav: {
        tree: "./tree"
    }
}