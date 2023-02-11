const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError{
  constructor(value,...params){
    super(params)
    this.value=value 

    // if(Error.captureStackTrace)
    // Error.captureStackTrace(this,MaximumLengthExceededError)
    this.name="MaximumLengthExceededError"
    if(this.value)
    this.message=`Maximum length exceeded by ${this.value}`
    else
    this.message=`Maximum length exceeded`

  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}

