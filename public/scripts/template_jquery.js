const url = window.location.href;
let name = url.substr(url.lastIndexOf("/") + 1);

$.getJSON('/data/data.json', (data) => {
    if(data.topics[`${name}`] != undefined){
        let topic = data.topics[`${name}`];

        $('#title').text(`${name}`);
        $('#pageNotFound').css({display: "none"})

        for (content in topic){
            if(content.startsWith('pic',0)){
                $(`<img class="image" src="${topic[content]}">`).insertBefore("#pageNotFound");
            }
            else if(content.startsWith('list',0)){
                $('<ol class="list">').insertBefore("#pageNotFound");
                for(element in topic[content]){
                    $(`<li> ${topic[content][element]} </li>`).insertBefore("#pageNotFound");
                }
                $('</ol>').insertBefore("#pageNotFound");
            }
            else if(content === "nextPage"){
                $(`<a class="button" href="/${topic[content]}">NEXT PAGE >> ${topic[content]}</a>`).appendTo('.centerButton');
            }
            else if(content === "title"){
                $(`<h2>${topic[content]}</h2>`).insertBefore("#pageNotFound");
            }
            else{
                $(`<p>${topic[content]}</p>`).insertBefore("#pageNotFound");
            }
        }
    }
})