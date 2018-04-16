function getTarget(e) { //Declare function
  if (!e) { // If there is no event object
   e = window.event; // Use old IE object
  } 
  return e.target || e.srcElement; //Get the target of event 
}

function itemtDone(e) { //Declare function
  // Remove item from list 
  var target, elParent, elGrandparent; //Declare variables
  target = getTarget(e); 				// Get the item clicked link
  elParent = target.parentNode;
  elGrandparent = target.parentNode.parentNode; // Get its list item
  elGrandparent = target.removeChild(elParent); //Remove list item from list 
  
  // Prevent the link from taking you elsewhere
  if (e.preventDefault) {  // If pr