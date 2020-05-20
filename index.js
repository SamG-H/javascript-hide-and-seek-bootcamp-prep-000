function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}

function increaseRankBy(n){
    const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = (parseInt(list[i].innerHTML) + n);
      }
}

function deepestChild(){
    var parent = document.getElementById('grand-node');
    var child = parent.children[0];
       while(child){                 //make the parent the child
       parent = child
       child = parent.children[0];
       }
       return parent;
}