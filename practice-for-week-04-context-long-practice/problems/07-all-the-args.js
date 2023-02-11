function allTheArgs(func, ...args) {
  return func.bind(Object,...args)
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;