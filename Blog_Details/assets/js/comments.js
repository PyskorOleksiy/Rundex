let popup1 = document.getElementById('reply1'),
    popup2 = document.getElementById('reply2'),

    reply1 = document.getElementById('comment1_reply'),
    reply2 = document.getElementById('comment2_reply');
    
    reply1.onclick = function() {
        popup1.style.display = "block";
    };

    reply2.onclick = function() {
        popup2.style.display = "block";
    };