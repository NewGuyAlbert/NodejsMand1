$.getJSON('/data/data.json', (data) => {
    if(data.topics != undefined){


        for(topic in data.topics){
            $(`<a class="button2" href="/${topic}"><h4> ${topic.toUpperCase()} </h4></a>`).appendTo(".content");
        }
    }
});