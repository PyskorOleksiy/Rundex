let popup1 = document.getElementById('questions_item1'),
    popup2 = document.getElementById('questions_item2'),
    popup3 = document.getElementById('questions_item3'),
    popup4 = document.getElementById('questions_item4'),
    popup5 = document.getElementById('questions_item5'),

    popupToggle1 = document.getElementById('questions_link1'),
    popupToggle2 = document.getElementById('questions_link2'),
    popupToggle3 = document.getElementById('questions_link3'),
    popupToggle4 = document.getElementById('questions_link4'),
    popupToggle5 = document.getElementById('questions_link5'),

    popupClose1 = document.getElementById('questions_second_link1'),
    popupClose2 = document.getElementById('questions_second_link2'),
    popupClose3 = document.getElementById('questions_second_link3'),
    popupClose4 = document.getElementById('questions_second_link4'),
    popupClose5 = document.getElementById('questions_second_link5'),

    text1 = document.getElementById('questions_lower_text1'),
    text2 = document.getElementById('questions_lower_text2'),
    text3 = document.getElementById('questions_lower_text3'),
    text4 = document.getElementById('questions_lower_text4'),
    text5 = document.getElementById('questions_lower_text5');
 
    popupToggle1.onclick = function() {
        popup1.style.background = "#14396D";
        popup1.style.color = "#FFFFFF";
        text1.style.display = "block";
        popupToggle1.style.display = "none";
        popupClose1.style.display = "block";
        popupClose1.style.color = "#FFFFFF";
    };
    popupClose1.onclick = function() {
    	popup1.style.background = "#FFFFFF";
        popup1.style.color = "#0E182B";
        text1.style.display = "none";
        popupToggle1.style.display = "block";
        popupClose1.style.display = "none";
    };
    popupToggle2.onclick = function() {
        popup2.style.background = "#14396D";
        popup2.style.color = "#FFFFFF";
        text2.style.display = "block";
        popupToggle2.style.transform = "rotate(180deg)";
        popupToggle2.style.color = "#FFFFFF";
    };
    popupClose2.onclick = function() {
    	popup2.style.background = "#FFFFFF";
        popup2.style.color = "#0E182B";
        text2.style.display = "none";
        popupToggle2.style.display = "block";
        popupClose2.style.display = "none";
    };
    popupToggle3.onclick = function() {
        popup3.style.background = "#14396D";
        popup3.style.color = "#FFFFFF";
        text3.style.display = "block";
        popupToggle3.style.transform = "rotate(180deg)";
        popupToggle3.style.color = "#FFFFFF";
    };
    popupClose3.onclick = function() {
    	popup3.style.background = "#FFFFFF";
        popup3.style.color = "#0E182B";
        text3.style.display = "none";
        popupToggle3.style.display = "block";
        popupClose3.style.display = "none";
    };
    popupToggle4.onclick = function() {
        popup4.style.background = "#14396D";
        popup4.style.color = "#FFFFFF";
        text4.style.display = "block";
        popupToggle4.style.transform = "rotate(180deg)";
        popupToggle4.style.color = "#FFFFFF";
    };
    popupClose4.onclick = function() {
    	popup4.style.background = "#FFFFFF";
        popup4.style.color = "#0E182B";
        text4.style.display = "none";
        popupToggle4.style.display = "block";
        popupClose4.style.display = "none";
    };
    popupToggle5.onclick = function() {
        popup5.style.background = "#14396D";
        popup5.style.color = "#FFFFFF";
        text5.style.display = "block";
        popupToggle5.style.transform = "rotate(180deg)";
        popupToggle5.style.color = "#FFFFFF";
    };
    popupClose5.onclick = function() {
    	popup5.style.background = "#FFFFFF";
        popup5.style.color = "#0E182B";
        text5.style.display = "none";
        popupToggle5.style.display = "block";
        popupClose5.style.display = "none";
    };
                    