
// =========================================== DATA ==================================
let  allMusic = [
    {
        id: "1",
        name: "Khuất lối",
        artist: "H Kray",
        img: "./image/song1.jpg",
        src: "https://mp3.filmisongs.com/go.php?id=Damn%20Song%20Raftaar%20Ft%20KrSNa.mp3",
    },
    {
        id: "2",
        name: "Sao Cũng Được",
        artist: "Thành Đạt",
        img: "./image/song2.jpg",
        src: "../musics/VeVoiEmDi-TienTien-4850318.mp3",
    },
    {
        id: "3",
        name: "Cuối Cùng Thì",
        artist: "Jack",
        img: "./image/song3.jpg",
        src: "../musics/LaAnh-PhamLichBMZ-8811329.mp3",
    },
    {
        id: "4",
        name: "Tiếng Pháo Tiễn Người",
        artist: "Hùng Quân",
        img: "./image/song4.jpg",
        src: "musics/song4.mp3",
    },
    {
        id: "5",
        name: "Thay Tôi Yêu Cô Ấy",
        artist: "Thanh Hưng",
        img: "./image/song5.jpg",
        src: "musics/song5.mp3",
    },
    {
        id: "6",
        name: "Yêu Khác Thương Hại",
        artist: "Thanh Hưng",
        img: "./image/song6.jpg",
        src: "musics/song6.mp3",
    },
    {
        id: "7",
        name: "Ai Đợi Mình Được Mãi",
        artist: "Thanh Hưng",
        img: "./image/song7.jpg",
        src: "musics/song7.mp3",
    },
    {
        id: "8",
        name: "Chắc Vì Mình Chưa Tốt",
        artist: "Thanh Hưng",
        img: "./image/song8.jpg",
        src: "musics/song8.mp3",
    }

]
// =========================================== END DATA ==================================

// định tuyến 
const navHome = document.getElementById('nav_home');
const navDiscover = document.getElementById('nav_discover');
const navLibrary = document.querySelector('.nav_library');
const navPlaylist = document.getElementById('nav_playlist');
const header = document.querySelector('.container header');
const home = document.querySelector('main .home');
const library = document.getElementById('library');
const discover = document.getElementById('discover');
// play video
const audio = document.getElementById('audio');
const btnPlay = document.querySelector('.btnPlay');
const btnPause = document.querySelector('.btnPause');
const btnFixedVideoPlay = document.querySelector('.controlsMusic .play_music_fixed');
const btnFixedVideoPause = document.querySelector('.controlsMusic .pause_music_fixed');
const list_music = document.querySelectorAll('#discover .music_item');
const play_music = document.querySelector('main .play_music');
const musicFixed = document.querySelector('.musicFixed');
const runAudio = document.querySelector('.runAudio');
const progressColor = document.querySelector('.progressColor');
const progress = document.querySelector('#progress');
const runTime = document.querySelector('.sliderMusic .runTime');
const sumTime = document.querySelector('.sliderMusic .sumTime');
let second ='';
let countSecond = 0;
let minute = '';
let countMinute = 0;
let timeMusic = 0;

let resetLayout = ()=>{
    header.classList.remove('active')
    home.style.display = 'none'
    play_music.style.display = 'none';
    // musicFixed.style.display = 'none';
    discover.style.display = 'none';
    library.style.display = 'none';

    navHome.classList.remove('active');
    navDiscover.classList.remove('active');
    navLibrary.classList.remove('active');
    navPlaylist.classList.remove('active');

    // btnPlay.classList.add('active');
    // btnPause.classList.remove('active');
    // btnFixedVideoPause.classList.remove('active');
    // runAudio.classList.remove('active');
    // btnFixedVideoPlay.classList.add('active');
    // progress.style.right = '100%';
    // sumTime.innerHTML = '00:00';
    // repeatMusic.classList.remove('active');
    // audio.pause();
    // audio.loop = false;
}
navHome.addEventListener('click',()=>{
    resetLayout();
    navHome.classList.add('active');
    home.style.display = 'block';
    load_music_home(allMusic);
})
navDiscover.addEventListener('click',()=>{
    resetLayout();
    navDiscover.classList.add('active');
    discover.style.display = 'block';
})

navLibrary.addEventListener('click',()=>{
    resetLayout();
    navLibrary.classList.add('active');
    library.style.display = 'block';
})

navPlaylist.addEventListener('click',()=>{
    document.getElementById('playlist').classList.add('active');
})


const discoverMusic = document.querySelector('#discover .list_music');
const img_music = document.querySelector('.play_music .audio img');
const name_music = document.querySelector('.play_music .name_music');
const author_music = document.querySelector('.play_music .des .author');
const music_fixed_left = document.querySelector('.musicFixed .leftMusicFixed');
const repeatMusic = document.querySelector('.musicFixed .repeatMusic');
const randomMusic = document.querySelector('.musicFixed .randomMusic');
const nextMusic = document.querySelector('.musicFixed .nextMusic');
const prevMusic = document.querySelector('.musicFixed .prevMusic');

let sum_time_music = '';
function load_music_discover(musics){
    let data = '';
    musics.forEach((music)=>{
        data += `          <li class="music_item" index="${music.id}">
                            <div class="contentMusic">
                                <div class="imageMusic">
                                    <img src="${music.img}" alt="">
                                    <div class="playMusic">
                                        <ion-icon name="play-outline"></ion-icon>
                                    </div>
                                    <div class="runAudio">
                                        <div><span></span><span></span><span></span><span></span></div>
                                    </div>
                                </div>
                                <div class="desMusic">
                                    <div class="nameMusic">${music.name}</div>
                                    <div class="authorMusic">${music.artist}</div>
                                    <div class="time_up">Hôm nay</div>
                                </div>
                                <div class="hoverItem">
                                    <div class="hoverAnotherChoice">
                                        <div class="add_library">
                                            <ion-icon name="heart"></ion-icon>
                                        </div>
                                        <div>
                                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>`
    })
    discoverMusic.innerHTML = data;
    const list_music_discover = document.querySelectorAll('#discover .list_music li.music_item .playMusic');
    handlePlayMusic(list_music_discover,allMusic);
}

function load_music_fixed_left(music){
    music_fixed_left.innerHTML = `
                        <img src="${music.img}" alt="">
                        <div class="desMusicFixed">
                            <div class="nameMusicFixed"><a>${music.name}</a></div>
                            <div class="authorMusicFixed">${music.artist}</div>
                        </div>
                        <div class="AnotherChoiceFixed">
                            <div class="add_library" ><ion-icon name="heart"></ion-icon></div>
                            <div><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                        </div>
    `
}
// listening to music
let listening_music = document.querySelector('.list_music_playing > ul');
function listening_Music(music,sum_time_music){
    listening_music.innerHTML = `
                            <li index=${music.id}>
                                <div><ion-icon name="musical-notes-outline"></ion-icon></div>
                                <div class="contentMusic">
                                    <img src="${music.img}" alt="">
                                    <div class="desMusic">
                                        <div class="nameMusic">${music.name}</div>
                                        <div class="authorMusic">${music.artist}</div>
                                    </div>
                                </div>
                                <div class="timeMusic">${sum_time_music}</div>
                                <div class="hoverItem">
                                    <div class="hoverAnotherChoice">
                                        <div class="add_library" ><ion-icon name="heart"></ion-icon></div>
                                        <div><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                                    </div>
                                </div>
                            </li>`
}
// list care
function load_music(musics,element,showTime = false){
    let html = '';
    if(showTime){
        musics.forEach((music,index)=>{
            html += `<li index="${music.id}">
                        <div class="idMusic">${index+1}</div>
                        <div class="contentMusic">
                            <div class="imageMusic">
                                <img src="${music.img}" alt="">
                                <div class="playMusic"><ion-icon name="play-outline"></ion-icon></div>
                                <div class="runAudio">
                                <div><span></span><span></span><span></span><span></span></div>
                            </div>
                            </div>
                            <div class="desMusic">
                                <div class="nameMusic">${music.name}</div>
                                <div class="authorMusic">${music.artist}</div>
                            </div>
                        </div>
                        <div class="timeMusic">03:06</div>
                        <div class="hoverItem">
                            <div class="hoverAnotherChoice">
                                <div class="add_library" ><ion-icon name="heart"></ion-icon></div>
                                <div><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
                            </div>
                        </div>
                    </li>`
    })
    }
    else{
        musics.forEach((music,index)=>{
            html += `<li index="${music.id}">
                        <div class="contentMusic">
                            <div class="imageMusic">
                                <img src="${music.img}" alt="">
                                <div class="playMusic"><ion-icon name="play-outline"></ion-icon></div>
                                <div class="runAudio">
                                <div><span></span><span></span><span></span><span></span></div>
                            </div>
                            </div>
                            <div class="desMusic">
                                <div class="nameMusic">${music.name}</div>
                                <div class="authorMusic">${music.artist}</div>
                            </div>
                        </div>
                    </li>`
    })
    }
    element.innerHTML = html;
}
// render home
const home_music = document.querySelector('.first_home ul');
const home_music_spotify = document.querySelector('.second_home ul');
function load_music_home(musics){
    let html = '';
    musics.forEach((music,index)=>{
            html += `<li index="${music.id}">
                        <a href="#">
                            <img src="${music.img}" alt="##">
                            <div class="name">${music.name}</div>
                            <div class="des">
                                ${music.artist}
                            </div>
                        </a>
                        <div><ion-icon name="caret-forward-outline"></ion-icon></div>
                    </li>`
    })
    home_music.innerHTML = html;
    home_music_spotify.innerHTML = html;
    // handle home music
    const list_home_music = document.querySelectorAll('.first_home ul li');
    const list_home_music_spotify = document.querySelectorAll('.second_home ul li');
    handlePlayMusic(list_home_music,allMusic);
    handlePlayMusic(list_home_music_spotify,allMusic);
}

// ================================================= MAIN ======================================================//ls
function Main() {
    load_music_home(allMusic);
    load_music_discover(allMusic);

    const care_music = document.querySelector('.sub_right .careMusic ul');
    load_music(allMusic,care_music,true);
    const list_music_care = document.querySelectorAll('.sub_right .careMusic ul li .playMusic');
    handlePlayMusic(list_music_care,allMusic);
    
    const libraryMusic = document.querySelector('#library #list_music_library ul');
    load_music(allMusic,libraryMusic,true);
    const list_play_music = document.querySelector('.list_play_music .next_music_list ul');
    load_music(allMusic,list_play_music);


    const list_music_handle = document.querySelectorAll('.sub_right .list_music_render ul li .playMusic');
    handlePlayMusic(list_music_handle,allMusic);
    const list_music_handle_library = document.querySelectorAll('#library #list_music_library ul li .playMusic');
    handlePlayMusic(list_music_handle_library,allMusic);

    const list_play_handle_music = document.querySelectorAll('.list_play_music .next_music_list ul li .playMusic');
    handlePlayMusic(list_play_handle_music,allMusic);       

    $(document).ready(function(){
        $(".add_library").on('click',function(){
            if($(this).closest('ul.render')){
                $(this).closest('ul.render').addClass('active');
            }
            $(this).addClass('active');
            // if(!arrLikeListMusic.includes($(this).closest('li').attr('index'))){
            //     ;
            // }
            $.ajax({
                url: '../php/addLibrary.php',
                type: 'POST',
                dataType: 'html',
                data: {
                    data:$(this).closest('li').attr('index')
                }
            }).done(function(ketqua) {
                if(ketqua == "success"){
                    console.log(ketqua);
                }
                else if(ketqua == "exited"){
                    console.log(ketqua);
                }
                else if(ketqua == "error"){
                    console.log(ketqua);
                }
                else{
                    console.log(ketqua);
                }
            });
        })
    })

    // show list play music
    const btnShowList = document.querySelector('.btn_run_listPlaymusic ion-icon');
    btnShowList.addEventListener('click',e=>{
        if(e.target === e.currentTarget){
            document.querySelector('.list_play_music').classList.toggle('active');
            e.target.parentElement.classList.toggle('active');
            if(document.querySelector('.list_play_music').classList.contains('active')
                && document.querySelector('.update_profile').classList.contains('active')){
               document.querySelector('.update_profile').classList.toggle('active');
            }
        }
    })
    // click profile
    document.querySelector('.user .profile img').addEventListener('click',(e)=>{
        if(e.target === e.currentTarget){
            document.querySelector('.update_profile').classList.toggle('active');
            if(document.querySelector('.update_profile').classList.contains('active')
               && document.querySelector('.list_play_music').classList.contains('active')
            ){
                document.querySelector('.list_play_music').classList.toggle('active')
                e.target.parentElement.classList.toggle('active');
             }
        }
    })
    document.querySelectorAll('.close_form').forEach(item=>{
        item.addEventListener('click',e=>{
            if(e.target === e.currentTarget){
                if( e.target.closest('.form_upload').classList.contains('active'))
                    e.target.closest('.form_upload').classList.remove('active');
            }
        })
    })
   
    
    document.querySelector('.imgUser').addEventListener('click',()=>{
        document.getElementById('form_upload_avatar').classList.add('active');
    })
    document.querySelector('.close_profile ion-icon').addEventListener('click',(e)=>{
        if(e.target === e.currentTarget)
            document.querySelector('.update_profile').classList.toggle('active');
    })

    // back main play music
    document.querySelector('.musicFixed').addEventListener('click',(e)=>{
            if(e.target === e.currentTarget){
                resetLayout();
                play_music.style.display = 'grid';
                
            }
    })
    // up load
    document.getElementById('upload').addEventListener('click',e=>{
        e.preventDefault();
        if(e.target === e.currentTarget){
            document.getElementById('form_upload_music').classList.add('active');
        }
    })
    document.querySelectorAll('.form_upload').forEach(item=>{
        item.addEventListener('click',(e)=>{
            if(e.target === e.currentTarget){
                e.target.classList.remove('active');
            }
    
        })
    })
    // random music
    function ranDomMusic(musics,elementAll){
        audio.onended = function(){
            if(isRandom){
                let index = Math.floor(Math.random() * musics.length);
                elementAll.forEach((elem,indexEle,arrEle)=>{
                    handleVideo(musics,index,arrEle[index]);
                })
            }
            else if(isRepeat){
                playAudio();
            }
            else{
                pauseAudio();
            }
        }
    }
    ranDomMusic(allMusic,list_music_handle_library);

    // upload avatar
};
Main();

// home show all item
const first_home = document.querySelector('.home .first_home');
const second_home = document.querySelector('.home .second_home');
const show_all = document.querySelectorAll('.home .title_home a');
const prevPage = document.querySelector('.nav_header div:first-child');
const nextPage = document.querySelector('.nav_header div:last-child');
const resetPageHome = ()=>{
    first_home.style.display = 'none';
    second_home.style.display = 'none';
}
show_all.forEach(item=>{
    item.addEventListener('click',function(){
        if(this.parentElement.parentElement.classList.contains('first_home')){
            resetPageHome();
            home.classList.add('active');
            first_home.classList.add('active');
            item.classList.add('active');
            prevPage.classList.add('active');
            prevPage.style.cursor = 'pointer' ;
        }
        else{
            resetPageHome();
            home.classList.add('active');
            second_home.classList.add('active');
            item.classList.add('active');
            prevPage.classList.add('active');
        }
    })
})
prevPage.addEventListener('click',function(){
    if(this.classList.contains('active')){
        first_home.style.display = 'block';
        second_home.style.display = 'block';
        home.classList.remove('active');
        first_home.classList.remove('active');
        second_home.classList.add('active');
        show_all.forEach(item=>{
            item.classList.remove('active');
        })
        prevPage.classList.remove('active');
    }
})



function playAudio(){
        isPlaying = true;
        audio.play();
        runAudio.classList.add('active');
        btnPlay.classList.remove('active');
        btnPause.classList.add('active');
        btnFixedVideoPlay.classList.remove('active');
        btnFixedVideoPause.classList.add('active');
        document.querySelector('.list_music_playing li>div:first-child ion-icon').style.animationPlayState = 'running';
        document.querySelectorAll(".runAudio").forEach(audio=>{
            audio.style.display = "block";
        })
}
// paused music-------------------------------------------------------------
function pauseAudio(){
        isPaused = true;
        audio.pause();
        runAudio.classList.remove('active');
        btnPlay.classList.add('active');
        btnPause.classList.remove('active');
        btnFixedVideoPause.classList.remove('active');
        btnFixedVideoPlay.classList.add('active');
        document.querySelectorAll(".runAudio").forEach(audio=>{
            audio.style.display = "none";
        })
        document.querySelector('.list_music_playing li>div:first-child ion-icon').style.animationPlayState = 'paused';
}


let isRepeat = false;
let isRandom = false;
let isPlaying = false;
let isPaused = false;
let listDanhSachPhat = [];
function handleVideo(musics,index,currentEle = ""){
    if(!listDanhSachPhat.includes(musics[index])){
        listDanhSachPhat.push(musics[index]);
    }
    audio.src = musics[index].src;   
    progress.oninput = function (e) {
       if(audio.currentTime){
        const seekTime = (audio.duration / 100) * Number(e.target.value);
        audio.currentTime = seekTime.toFixed(0);
       }
        
    }; 
    audio.ontimeupdate = function(){
        if (audio.duration) {
            const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);  
            progress.value = Math.floor((audio.currentTime / audio.duration) * 100);
            progressColor.style.right = 100 - progressPercent+ '%';
            // set second
            countSecond = Math.floor(audio.currentTime % 60) ;
            countMinute = Math.floor(audio.currentTime / 60);
            second = countSecond < 10? '0'+countSecond:countSecond;
            minute = countMinute < 10? '0'+countMinute:countMinute;
            sum_time_music =`${Math.floor(timeMusic / 60) < 10? '0'+Math.floor(timeMusic / 60):Math.floor(timeMusic % 60)}:${Math.floor(timeMusic % 60) < 10? '0'+Math.floor(timeMusic % 60):Math.floor(timeMusic % 60)}`;
            runTime.innerHTML = `${minute}:${second}`
        }
    }
    // repeat music
    repeatMusic.onclick = function(e){
        isRepeat = true;
        if(e.target.parentElement.classList.contains('active')){
            e.target.parentElement.classList.remove('active');
        }
        else{
            e.target.parentElement.classList.add('active');
            if(randomMusic.classList.contains('active')){
                randomMusic.classList.remove('active');
                isRandom = false;
            }
        }
    }
    randomMusic.onclick = function(e){
        isRandom = true;
        if(e.target.parentElement.classList.contains('active')){
            e.target.parentElement.classList.remove('active');
        }
        else{
            e.target.parentElement.classList.add('active');
            if(repeatMusic.classList.contains('active')){
                repeatMusic.classList.remove('active');
                isRepeat = false;
        }
        }
    }

    // volumn
    const highVolumn = document.querySelector('.volumeMusic .high');
    const muteVolumn = document.querySelector('.volumeMusic .mute');
    audio.volume = 0.5;
    document.querySelector('.volumeMusic input').oninput = function(e){
        let volumnVal =(e.target.value)/100; 
        audio.volume = volumnVal;
        document.querySelector('.rightMusicFixed .progressColor').style.right = (1 - volumnVal)*100 + '%';
            if(e.target.value <= 0){
                highVolumn.classList.remove('active')
                muteVolumn.classList.add('active')
            }
            else{
                highVolumn.classList.add('active')
                muteVolumn.classList.remove('active')

            }
    }
    highVolumn.addEventListener('click',e=>{
        if(e.target === e.currentTarget){
            e.target.classList.toggle('active');
            muteVolumn.classList.add('active')
            audio.volume = 0;
            document.querySelector('.rightMusicFixed .progressColor').style.right = 100 + '%';
        }
    })
    muteVolumn.addEventListener('click',e=>{
        if(e.target === e.currentTarget){
            e.target.classList.toggle('active');
            highVolumn.classList.add('active')
            audio.volume = 0.5;
            document.querySelector('.rightMusicFixed .progressColor').style.right = 50 + '%';

        }
    })
    // end volumn
    // play_music.style.display = 'grid';
    musicFixed.style.display = 'flex';  
    document.querySelectorAll('.playMusic.active').forEach(_item=>{
        _item.classList.remove('active');
        _item.nextElementSibling.classList.remove('active');
        if(_item.closest('li')){
            _item.closest('li').classList.remove('active');
        }
    })
    if(currentEle != "" && isPlaying){
        currentEle.classList.add('active');
        currentEle.nextElementSibling.classList.add('active');    
    }

    if(isPlaying){
        //ĐANG PHÁT
        if(currentEle.closest('li')){
            let currentIndex = currentEle.closest('li').getAttribute('index');

            const list_right_music_fixed = document.querySelector('.list_play_music .playing_music ul');
            load_music(listDanhSachPhat,list_right_music_fixed);

            const list_all_music = document.querySelectorAll('ul.music li');
            list_all_music.forEach(item=>{
                if(item.getAttribute('index') && item.getAttribute('index') == currentIndex){
                    item.querySelectorAll('.playMusic').forEach(__item=>{
                        __item.classList.add('active')
                    });
                    item.querySelectorAll('.runAudio').forEach(__item=>{
                        __item.classList.add('active')
                    });
                    item.classList.add('active')
                }
            })
            handlePlayMusic(list_all_music,listDanhSachPhat);
        }
        // tiep theo
    }

    document.querySelector('.playMusic').classList.remove('active');
    document.querySelector('.runAudio').classList.add('active');
    
    img_music.src = musics[index].img;
    name_music.innerHTML = musics[index].name;
    author_music.innerHTML = musics[index].artist;
    load_music_fixed_left(musics[index]);

    // load music fixed right

    
    setTimeout(()=>{
        playAudio();
    },1000);
    // play music-------------------------------------------------------------
    btnPlay.addEventListener('click',playAudio);
    btnFixedVideoPlay.addEventListener('click',playAudio);  
    btnPause.addEventListener('click',pauseAudio);
    btnFixedVideoPause.addEventListener('click',pauseAudio);
    audio.addEventListener('durationchange',e=>{
        sum_time_music =`${Math.floor(e.target.duration / 60) < 10? '0'+Math.floor(e.target.duration / 60):Math.floor(e.target.duration % 60)}:${Math.floor(e.target.duration % 60) < 10? '0'+Math.floor(e.target.duration % 60):Math.floor(e.target.duration % 60)}`
        listening_Music(musics[index],sum_time_music); 
        sumTime.innerHTML = sum_time_music;

    })
}


function handlePlayMusic(elementAll,musics){
    let id_element;
    elementAll.forEach((item,index,arrEle)=>{
        item.addEventListener('click',()=>{
            isPlaying = true;
            let currentIndexMusic = 0;
            // resetLayout();
            id_element = index+1;
            musics.forEach((music,indexMusic,arr)=>{
                if(id_element == music.id){
                    handleVideo(arr,indexMusic,arrEle[indexMusic]);
                    currentIndexMusic = indexMusic;
                    // next 
                    nextMusic.addEventListener('click',()=>{
                        if(currentIndexMusic < arr.length-1){
                            currentIndexMusic += 1;                            
                        }
                        else{
                            currentIndexMusic = 0;
                        }
                        handleVideo(arr,currentIndexMusic,arrEle[currentIndexMusic]);
                    })
                    // prev
                    prevMusic.addEventListener('click',()=>{
                        if(currentIndexMusic > 0){
                            currentIndexMusic -= 1;
                        }
                        else{
                            currentIndexMusic = arr.length - 1;
                        }
                        handleVideo(arr,currentIndexMusic,arrEle[currentIndexMusic]);
                    })
                }
            })
        });
    })

}



// search
const elemSearch = document.getElementById('searchInput');
let html = '';
elemSearch.addEventListener('input',e=>{
    let searchVal = e.target.value.toLowerCase().trim();
    if(searchVal != ''){
        allMusic.forEach(data=>{
            if(data.name.toLocaleLowerCase().includes(searchVal)){
                html += ` <li>
                            <div class="contentMusic">
                                <div class="imageMusic">
                                    <img src="${data.img}" alt="">
                                    <div class="playMusic">
                                        <ion-icon name="play-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="desMusic">
                                    <div class="nameMusic">${data.name}</div>
                                    <div class="authorMusic">${data.artist}</div>
                                </div>
                            </div>
                        </li>`
                        document.querySelector('.listSearch ul').innerHTML = html;
                    }
            else{
                html = '';
            }
        })
    }
    else{
        html = '';
        document.querySelector('.listSearch ul').innerHTML = html;

    }
})
