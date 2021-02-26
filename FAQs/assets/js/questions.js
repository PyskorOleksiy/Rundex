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
    popupToggle6 = document.getElementById('questions_link6'),
    popupToggle7 = document.getElementById('questions_link7'),
    popupToggle8 = document.getElementById('questions_link8'),

    popupClose1 = document.getElementById('questions_second_link1'),
    popupClose2 = document.getElementById('questions_second_link2'),
    popupClose3 = document.getElementById('questions_second_link3'),
    popupClose4 = document.getElementById('questions_second_link4'),
    popupClose5 = document.getElementById('questions_second_link5'),
    popupClose6 = document.getElementById('questions_second_link6'),
    popupClose7 = document.getElementById('questions_second_link7'),
    popupClose8 = document.getElementById('questions_second_link8'),

    text1 = document.getElementById('questions_lower_text1'),
    text2 = document.getElementById('questions_lower_text2'),
    text3 = document.getElementById('questions_lower_text3'),
    text4 = document.getElementById('questions_lower_text4'),
    text5 = document.getElementById('questions_lower_text5'),
    text6 = document.getElementById('questions_lower_text6'),
    text7 = document.getElementById('questions_lower_text7'),
    text8 = document.getElementById('questions_lower_text8');
 
    popupToggle1.onclick = function() {
        text1.style.display = "block";
        popupToggle1.style.display = "none";
        popupClose1.style.display = "block";
    };
    popupClose1.onclick = function() {
        text1.style.display = "none";
        popupToggle1.style.display = "block";
        popupClose1.style.display = "none";
    };
    popupToggle2.onclick = function() {
        text2.style.display = "block";
        popupToggle2.style.display = "none";
        popupClose2.style.display = "block";
    };
    popupClose2.onclick = function() {
        text2.style.display = "none";
        popupToggle2.style.display = "block";
        popupClose2.style.display = "none";
    };
    popupToggle3.onclick = function() {
        text3.style.display = "block";
        popupToggle3.style.display = "none";
        popupClose3.style.display = "block";
    };
    popupClose3.onclick = function() {
        text3.style.display = "none";
        popupToggle3.style.display = "block";
        popupClose3.style.display = "none";
    };   
    popupToggle4.onclick = function() {
        text4.style.display = "block";
        popupToggle4.style.display = "none";
        popupClose4.style.display = "block";
    };
    popupClose4.onclick = function() {
        text4.style.display = "none";
        popupToggle4.style.display = "block";
        popupClose4.style.display = "none";
    };   
    popupToggle5.onclick = function() {
        text5.style.display = "block";
        popupToggle5.style.display = "none";
        popupClose5.style.display = "block";
    };
    popupClose5.onclick = function() {
        text5.style.display = "none";
        popupToggle5.style.display = "block";
        popupClose5.style.display = "none";
    };      
    popupToggle6.onclick = function() {
        text6.style.display = "block";
        popupToggle6.style.display = "none";
        popupClose6.style.display = "block";
    };
    popupClose6.onclick = function() {
        text6.style.display = "none";
        popupToggle6.style.display = "block";
        popupClose6.style.display = "none";
    };    
    popupToggle7.onclick = function() {
        text7.style.display = "block";
        popupToggle7.style.display = "none";
        popupClose7.style.display = "block";
    };
    popupClose7.onclick = function() {
        text7.style.display = "none";
        popupToggle7.style.display = "block";
        popupClose7.style.display = "none";
    };
    popupToggle8.onclick = function() {
        text8.style.display = "block";
        popupToggle8.style.display = "none";
        popupClose8.style.display = "block";
    };
    popupClose8.onclick = function() {
        text8.style.display = "none";
        popupToggle8.style.display = "block";
        popupClose8.style.display = "none";
    };