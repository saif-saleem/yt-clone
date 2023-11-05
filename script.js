const API_KEY="AIzaSyCQtjEkzpL6YUc8Qr-gGrnagtpYy1kySWA";
const BASE_URL="https://www.googleapis.com/youtube/v3";


let data_items;
let video_id;
let channel_id;

async function fetchVideo(searchQuery, maxResults){
    const response =await fetch(`${BASE_URL}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`);
    const data =await response.json();
    data_items=data.items;
    renderData(data.items);
    console.log(data.items);
}

// fetchVideo('icc',50);
// console.log(data_items);
async function getVideoStats(videoID){
const response=await fetch(`${BASE_URL}/videos?key=${API_KEY}&part=statistics&id=${videoID}`);
const data =await response.json();
// video_id=data.items[0].id;
console.log(data);
return data; 
}

async function getChannellogo(getChannellogo){
    const response=await fetch(`${BASE_URL}/channels?key=${API_KEY}&part=snippet&id=${channelID}`);
    const data =await response.json();
    // channel_id=
    console.log(data);  
    }

    // async function getChannellogo(channelID){
    //     const response=await fetch(`${BASE_URL}/channels?key=${API_KEY}&part=snippet&id=${videoID}`);
    //     const data =await response.json();
    //     console.log(data);
    //     }
        

function displayData(ele){
    console.log(ele.snippet.channelId);
    if (ele.id.videoId) {
        // console.log("Video ID: " + ele.id.videoId);s
        getVideoStats(ele.id.videoId)
            .then(videoData => {
                console.log("Video Stats:", videoData);
            })
            .catch(error => {
                console.error("Error fetching video stats:", error);
            });
    }
    console.log("object");
}

// await fetchVideo('icc', 50);
 fetchVideo('icc', 50);


    function renderData(videos){
        // let hotels=hotel.filter((h)=>{
        //    return h.name.includes(hotel_det.city);
        // });
            
        videos.forEach((e) => {
            displayData(e);
          });
    }

// async function main() {
//     await fetchVideo('icc', 50);
//     await getVideoStats("pGbSs1ix9Rg");
//     console.log(data_items);
//     console.log(video_id);
  
// //    await getVideoStats("pGbSs1ix9Rg");
// }

// main();




// getVideoStats("pGbSs1ix9Rg");