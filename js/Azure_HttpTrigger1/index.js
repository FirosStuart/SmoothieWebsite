module.exports = async function (context, req) {
    var fetch = require('node-fetch')
    console.log(typeof process.env["MICRO_CMS_KEY"])
    return fetch('https://mangolassi.microcms.io/api/v1/blogs/', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'content-type': 'application/json; charset=utf-8',
            "X-API-KEY": "cc46cc4e-41a6-40e8-8e3f-7ac3488624dc",
            // 'content-type': process.env["MICRO_CMS_KEY"]
        },
    }).then(res => res.json())
        .then(json => {
            context.res = {
                status: 200,
                headers: { "content-type": "application/json" },
                body: JSON.stringify(json)
            };
        });

    context.done();
};