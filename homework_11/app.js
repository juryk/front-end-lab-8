var rootNode = document.getElementById("root");

function buildTreeView(arr, node){
    for(let i = 0; i < arr.length; i++){
        let currentNode = arr[i];

        let li = document.createElement('li');

        if(currentNode.folder){
            li.innerHTML = `<i class="material-icons icon-yellow">folder</i> ${currentNode.title}`;
            li.className = 'folder'
        } else {
            li.innerHTML = `<i class="material-icons">insert_drive_file</i> ${currentNode.title}`;
            li.className = 'file'
        }

        node.appendChild(li);

        if(currentNode.children){
            let ul = document.createElement('ul');
            ul.className = 'hidden';
            node.appendChild(ul);

            buildTreeView(currentNode.children, node.lastChild)
        } else if (currentNode.folder){
            let p = document.createElement('p');
            p.className = 'hidden';
            p.innerHTML = 'Folder is empty'
            node.appendChild(p);
        }

    }
    return node;
}

let ul = buildTreeView(structure, document.createElement('ul'));
rootNode.appendChild(ul);

let arrOfLis = document.querySelectorAll('li.folder');
for(let i = 0; i < arrOfLis.length; i++){
    arrOfLis[i].onclick = function(event){
        let el = event.target.nextSibling;
        if(el.classList.contains('shown')){
            el.className = 'hidden';
        } else if(el.classList.contains('hidden')){
            el.className = 'shown';
        }
    }
}
