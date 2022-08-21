let num_input = document.querySelector("#input-card-num")



function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}


num_input.maxLength = 19;
num_input.addEventListener("input", function (event) {
    let text = event.target.value;
    let len = text.length;
    let prev = document.querySelector(".card-num-prev-span")
    let user_text = text + ('0'.repeat(num_input.maxLength - len))
    prev.innerHTML = cc_format(user_text)

    event.target.value = text.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();

    console.log(text)
    console.log(event)

})

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


num_input.addEventListener("change", function (event) {
    let text = event.target.value;
    let len = text.length;
    const node = document.createElement("span");
    node.setAttribute("id", "num_err");
    let el = document.querySelector('#num_err')
    if (len != 19 && len != 0) {
        
        const textnode = document.createTextNode("Unsupported");
        node.appendChild(textnode);
        insertAfter(node,num_input)
    }
    else if(len == 0){
        el.remove();
    }


})



