const videoCardContainer= document.getElementById('video-container');

const API_KEY="AIzaSyCQtjEkzpL6YUc8Qr-gGrnagtpYy1kySWA";
const BASE_URL="https://www.googleapis.com/youtube/v3/videos?";
const CHANNEL_URL="https://www.googleapis.com/youtube/v3/channels?";

fetch(BASE_URL + new URLSearchParams({
    key: API_KEY,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50, // Corrected parameter name
    regionCode: 'IN'
}))
    .then(res => res.json())
    .then(data => {
       data.items.forEach(item=>{
        getChannelIcon(item);
       })
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

    const getChannelIcon=(video_data)=>{
        fetch(CHANNEL_URL+ new URLSearchParams({
            key: API_KEY,
            part: 'snippet',
            id: video_data.snippet.channelId
        }))
        .then(res => res.json())
    .then(data => {
    
    video_data.channelThumbnail=data.items[0].snippet.thumbnails.default.url;
   makevideocard(video_data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
    }


    const makevideocard=(data)=>{
        videoCardContainer.innerHTML+=` <div id="video" onclick="location.href='https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" alt="" class="thumb">
        <div id="content">
            <img src="${data.channelThumbnail}" alt="" class="chan-icon">
            <div id="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
        </div>

        </div>`;
    }

    const searchInput=document.getElementById("search");
    const searchBtn=document.getElementById("btn");
    let searchLink="https://www.youtube.com/results?search_query=";

    searchBtn.addEventListener('click',()=>{
        if(searchInput.value.length){
            location.href=searchLink+searchInput.value;
        }
    })