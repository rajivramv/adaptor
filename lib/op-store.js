"use strict";

function OperationStore () {

}

operationStore.prototype.get = function(operationId) {
  
  // The extending class should override this function
  throw new Error ('Function should be overriden by extending class')
};
