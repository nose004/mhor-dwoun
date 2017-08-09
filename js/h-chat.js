var you = {};
you.avatar = "https://lh6.googleusercontent.com/-lr2nyjhhjXw/AAAAAAAAAAI/AAAAAAAARmE/MdtfUmC0M4s/photo.jpg?sz=48";

var me = {};
// me.avatar = "https://a11.t26.net/taringa/avatares/9/1/2/F/7/8/Demon_King1/48x48_5C5.jpg";
me.avatar = "http://www.fumira.jp/cut/medical/doctor/doctor1_2.gif";

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

//-- No use time. It is a javaScript effect.
function insertChat(who, text, time){
    var control = "";
    var date = formatAMPM(new Date());

    if (who == "me"){

        control = '<li style="width:100%">' +
            '<div class="msj macro">' +
            '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
            '<div class="text text-l">' +
            '<p>'+ text +'</p>' +
            '<p><small>'+date+'</small></p>' +
            '</div>' +
            '</div>' +
            '</li>';
    }else{
        control = '<li style="width:100%;">' +
            '<div class="msj-rta macro">' +
            '<div class="text text-r">' +
            '<p>'+text+'</p>' +
            '<p><small>'+date+'</small></p>' +
            '</div>' +
            '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +
            '</li>';
    }
    setTimeout(
        function(){
            $("ul", ".p-chat").append(control);

        }, time);

}

function resetChat(){
    $("ul", ".p-chat").empty();
}

$(".mytext").on("keyup", function(e){
    if (e.which == 13){
        var text = $(this).val();
        if (text !== ""){
            insertChat("me", text);
            $(this).val('');
        }
    }
});

//-- Clear Chat
resetChat();

//-- Print Messages
insertChat("you", "Hello Doctor.", 0);
insertChat("me", "Hi, Patient!    How can I help you?", 2000);
insertChat("you", "I have a headache.", 3000);
insertChat("me", "How bad is it?", 4000);
insertChat("you", "I can't breathe.", 5000);
insertChat("me", "Oh, it's too late.", 6000);
insertChat("me", "I'm calling an ambulance.", 7500);


//-- NOTE: No use time on insertChat.