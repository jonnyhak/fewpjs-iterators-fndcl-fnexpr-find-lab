const testVar = {}

function testFunc() {
  return "hi"
}

// record.find( function(e) { return e.result === "W"} ) 


superbowlWin = (record) => {
  let outcome = record.find( record => record.result === "W")
  if (outcome) {
    return outcome.year
  } else {
    undefined 
  }
}