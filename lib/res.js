"use strict";

const EventEmitter = require('emitter')
  , utils = require('utils');

util.inherits(Response, EventEmitter);

function DeferredResponse (responses){
  this._responses = responses;
  Response._super.call(this);
}

DeferredResponse.prototype.getResponseTypes(){
  //
}

DeferredResponse.prototype.respond(){

}


defRes = new DeferredResponse(); // Cannot respond with anything

defRes = new DeferredResponse(['header', 'body', 'meta']);

defRes.respond(header, body, meta);

res = defRes.respond(header, body);
res.send('meta', meta);
res.send('meta', meta);

var res = defRes.respond();
res.send('body', body);
res.send('meta', meta);
res.send('header', header);


adaptor.exec('foo',{},function(defRes){
  for (let resTypes in defRes.getResponseType){

  }

})

adaptor.exec('foo',{}).on('body').pipe