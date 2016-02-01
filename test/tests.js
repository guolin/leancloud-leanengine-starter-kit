var should = require('chai').should();
var AV = require("leanengine");
var service = require("../server");
var request = require("supertest");
var app = request("../app");

describe("LeanEngine Cloud Code ", function(){
	it("should return pang with ping", function(done){
		var pang = AV.Cloud.run("ping");
		pang.then(function(data){
			data.should.equal("pang");
			done();
		}, function(err){
			done(err);
		});

	});
});

describe("LeanEngine Express API", function(){
    before(function () {
        require('../server.js')
    });
    it("should return ping with pang", function (done) {
        request('http://localhost:3000')
            .get('/pang/')
            .expect(200)
            .end(function(err, res){
                should.not.exist(err);
                res.text.should.equal('ping');
                done();
            })
    });
});

