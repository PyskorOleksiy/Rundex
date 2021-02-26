let popup1 = document.getElementById('container_inner1'),
    popup2 = document.getElementById('container_inner2'),
    popup3 = document.getElementById('container_inner3'),

    page1_link1 = document.getElementById('page1_link1'),
    page1_link2 = document.getElementById('page1_link2'),
    page1_link3 = document.getElementById('page1_link3'),

    page2_link1 = document.getElementById('page2_link1'),
    page2_link2 = document.getElementById('page2_link2'),
    page2_link3 = document.getElementById('page2_link3'),

    page3_link1 = document.getElementById('page3_link1'),
    page3_link2 = document.getElementById('page3_link2'),
    page3_link3 = document.getElementById('page3_link3');
    
    page1_link1.onclick = function() {
        popup1.style.display = "flex";
        popup2.style.display = "none";
        popup3.style.display = "none";
    };
    page1_link2.onclick = function() {
        popup2.style.display = "flex";
        popup1.style.display = "none";
        popup3.style.display = "none";
    };
    page1_link3.onclick = function() {
        popup3.style.display = "flex";
        popup1.style.display = "none";
        popup2.style.display = "none";
    };

    page2_link1.onclick = function() {
        popup1.style.display = "flex";
        popup2.style.display = "none";
        popup3.style.display = "none";
    };
    page2_link2.onclick = function() {
        popup2.style.display = "flex";
        popup1.style.display = "none";
        popup3.style.display = "none";
    };
    page2_link3.onclick = function() {
        popup3.style.display = "flex";
        popup1.style.display = "none";
        popup2.style.display = "none";
    };

    page3_link1.onclick = function() {
        popup1.style.display = "flex";
        popup2.style.display = "none";
        popup3.style.display = "none";
    };
    page3_link2.onclick = function() {
        popup2.style.display = "flex";
        popup1.style.display = "none";
        popup3.style.display = "none";
    };
    page3_link3.onclick = function() {
        popup3.style.display = "flex";
        popup1.style.display = "none";
        popup2.style.display = "none";
    };