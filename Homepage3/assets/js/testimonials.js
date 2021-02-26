let popup1 = document.getElementById('testimonials_content1'),
    popup2 = document.getElementById('testimonials_content2'),

    popupUp1 = document.getElementById('navigator_btn_up1'),
    popupUp2 = document.getElementById('navigator_btn_up2'),
    popupDown1 = document.getElementById('navigator_btn_down1'),
    popupDown2 = document.getElementById('navigator_btn_down2'),

    popupNavigator1 = document.getElementById('testimonials_navigator1'),
    popupNavigator2 = document.getElementById('testimonials_navigator2');
 
    popupDown1.onclick = function() {
        popup1.style.display = "none";
        popup2.style.display = "inline-block";
        popupNavigator1.style.display = "none";
        popupNavigator2.style.display = "inline-block";
    };
    popupUp2.onclick = function() {
        popup1.style.display = "inline-block";
        popupNavigator1.style.display = "inline-block";
        popup2.style.display = "none";
        popupNavigator2.style.display = "none";
    };
    