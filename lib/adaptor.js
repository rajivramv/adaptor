"use strict";
var operationStore = require('./fixtures').operationStore,
  operationBuilder = require('./fixtures').operationBuilder,
  clientLibs = require('./fixtures')._clientLibs,
  resultBuilder = require('./fixtures').resultBuilder;

function Adaptor (options, elements){
  if (!(this instanceof Adaptor)) return new Adaptor(operationStore, clientLibs);
  this._operationStore = elements.operationStore || operationStore ;
  this._operationBuilder = elements.operationBuilder || operationBuilder;
  this._clientLibs = elements.clientLibs || clientLibs;
  this._resultBuilder = elements.resultBuilder || resultBuilder;
}

Adaptor.prototype.exec = function(operationId, params) {

};