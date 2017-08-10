function setFn() {
    /*A handler on a parent element can always get the details about where it actually happened.
    
    *The most deeply nested element that caused the event is called a target element, accessible as event.target.
    Note the differences from this (=event.currentTarget):

    event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
    this – is the “current” element, the one that has a currently running handler on it.
    For instance, if we have a single handler form.onclick, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to <form> and runs the handler.
    In form.onclick handler:

    this (=event.currentTarget) is the <form> element, because the handler runs on it.
    event.target is the concrete element inside the form that actually was clicked.*/

    form.onclick = function(event) {
        event.target.style.backgroundColor = 'yellow'
            //CurrentTarget will be the form as the handler is set on it. event.currentTarget and this both refer to the form.
            //event.target on the other hand refers to the the element that initiated the event.
            //NOTE: IT IS POSSIBLE THAT event.target === event.currentTarget(OR THIS), WHEN THE CLICK IS MADE DIRECTLY ON event.currenttarget/ form / the element onclick is registered to
        alert("target = " + event.target.tagName + ", this = " + event.currentTarget);

        event.target.style.backgroundColor = ''
    }

}


window.onload = setFn;