const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/api1",{
        target:"http://localhost:5000/",
        changeOrigin:true,
        pathRewrite:{
            "^/api1":""
        }
    }))
}
