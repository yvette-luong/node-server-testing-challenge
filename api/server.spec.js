const { expectCt } = require("helmet");
const supertest = require("supertest");
const { intersect } = require("../database/knexconfig.js");
const server = require("./server.js"); 

describe("server.js", () =>{
    describe("GET /", ()=>{
        it("should return 200 status", () =>{
            return supertest(server)
                .get("/")
                .then(res =>{
                    expect(res.status).toBe(200)
                    // console.log(supertest)
                })
           
        })
    })
})