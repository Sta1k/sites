window.addEventListener("resize", compareWidth);

function compareWidth() {
    var width = window.innerWidth;

    if (width<=320){
        document.head.children[2].disabled = true;
        document.head.children[3].disabled = true;
        document.head.children[4].disabled = true;
        document.head.children[5].disabled = false;
       // document.head.replaceChild(link, document.head.children[2])
    }
    else if(width<=640&&width>320){
        document.head.children[2].disabled = true;
        document.head.children[3].disabled = true;
        document.head.children[4].disabled = false;
        document.head.children[5].disabled = true;
    }
    else if(width<=980&&width>640){
        document.head.children[2].disabled = true;
        document.head.children[3].disabled = false;
        document.head.children[4].disabled = true;
        document.head.children[5].disabled = true;
    }
    else if(width<=1024&&width>980){
        document.head.children[2].disabled = false;
        document.head.children[3].disabled = true;
        document.head.children[4].disabled = true;
        document.head.children[5].disabled = true;
    }
    else if(width>1024){
        document.head.children[2].disabled = false;
        document.head.children[3].disabled = true;
        document.head.children[4].disabled = true;
        document.head.children[5].disabled = true;
    }
}
compareWidth();