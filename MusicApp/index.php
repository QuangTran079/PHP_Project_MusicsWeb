<?php
require('./php/connect.php');
session_start();
if (!empty($_SESSION["id"])) {
    $id = $_SESSION["id"];
    $result = $conn->query("SELECT * FROM users WHERE u_id = '$id'");
    $row = $result->fetch_assoc();
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="./image/icon.png" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/main_nav_header.css">
    <link rel="stylesheet" href="./css/search.css">

    <link rel="stylesheet" href="./css/fixed.css">
    <link rel="stylesheet" href="./css/main_left.css">
    <link rel="stylesheet" href="./css/main_right_playMusic.css">
    <link rel="stylesheet" href="./css/main_right_library.css">
    <link rel="stylesheet" href="./css/home.css">
    <link rel="stylesheet" href="./css/same_flex.css">
    <title>Music App</title>
</head>

<body onload="window.location='#home'">

    <audio id="audio" src="" style="display: none;"></audio>
    <div class="container">
        <!-- main nav left -->
        <div class="main_left">
            <div class="logo">
                <span>
                    A
                </span>
                <span>n</span>
                <span>P</span>
                <span>3</span>
            </div>
            <ul>
                <li id="nav_home" class="active">
                    <a href="#">
                        <ion-icon name="home-outline"></ion-icon>
                        Trang chủ
                    </a>
                </li>
                <li id="nav_discover">
                    <a href="#">
                        <ion-icon name="search-outline"></ion-icon>
                        Khám phá
                    </a>
                </li>
                <li id="nav_library" class="<?php
                                            if (!empty($_SESSION['id'])) {
                                                echo "nav_library";
                                            } else {
                                                echo "";
                                            }
                                            ?>">
                    <a href="#">
                        <ion-icon name="library-outline"></ion-icon>
                        Thư viện
                    </a>
                    <div class="message-library" id="message-library">
                        <h3>Thông báo</h3>
                        <p>Đăng nhập để tiếp tục </p>
                        <div class="nav-library">
                            <button id="latter">Để sau</button>
                            <button><a href="./php/login.php">Đăng nhập</a></button>
                        </div>
                    </div>
                </li>
            </ul>
            <script>
            $(document).ready(function() {
                let uID = <?php if (!empty($_SESSION['id'])) {
                                    echo $row['u_id'];
                                } else {
                                    echo "";
                                } ?>
                $('#nav_library').on('click', function() {
                    if (uID != "") {
                        $('#message-library').show();
                        let hideMessege = setTimeout(() => {
                            $('#message-library').hide();

                        }, 3000)
                        $(".library").hide();

                    } else {
                        $(".library").show();

                    }
                });

            });
            </script>
            <span></span>
            <ul>
                <li id="nav_playlist">
                    <a href="#">
                        <ion-icon name="add-outline"></ion-icon>
                        Tạo playlist
                    </a>
                    <div class="message-library" id="message-playlist">
                        <h3>Thông báo</h3>
                        <p>Đăng nhập để tiếp tục </p>
                        <div class="nav-library">
                            <button id="latter">Để sau</button>
                            <button><a href="./php/login.php">Đăng nhập</a></button>
                        </div>
                    </div>
                </li>

                <script>
                $(document).ready(function() {
                    let uID = <?php if (!empty($_SESSION['id'])) {
                                        echo $row['u_id'];
                                    } else {
                                        echo "";
                                    } ?>
                    $('#nav_playlist').on('click', function() {
                        if (uID != "") {
                            $('#message-playlist').show();
                            let hideMessege = setTimeout(() => {
                                $('#message-playlist').hide();

                            }, 3000)
                            $("#playlist").hide();

                        } else {
                            $("#playlist").show();

                        }
                    });

                });
                </script>

                <li id="likeMusic">
                    <a href="#">
                        <ion-icon name="heart"></ion-icon>
                        Bài hát đã thích
                    </a>
                </li>

            </ul>
        </div>

        <!-- main right -->
        <div class="main_right">
            <header>
                <!-- back - next -->
                <div class="nav_header">
                    <div>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>

                <!-- serach input header -->
                <div class="search_input">
                    <input type="text" name="" id="searchInput" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát,..."
                        autocomplete="off">
                    <label for="searchInput">
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                    <div class="same_list_music listSearch">
                        <div class="list_music_render">
                            <div class="titleSearch">Gợi ý kết quả</div>
                            <ul class="music
                                <?php
                                if (!empty($_SESSION["id"])) {
                                    echo "render";
                                } else {
                                    echo "";
                                }
                                ?>
                            ">
                                <!-- <li>
                                    <div class="contentMusic">
                                        <div class="imageMusic">
                                            <img src="./image/song1.jpg" alt="">
                                            <div class="playMusic">
                                                <ion-icon name="play-outline"></ion-icon>
                                            </div>
                                        </div>
                                        <div class="desMusic">
                                            <div class="nameMusic">Khuất lối</div>
                                            <div class="authorMusic">Hy Ka </div>
                                        </div>
                                    </div>

                                </li> -->

                            </ul>
                        </div>
                    </div>
                </div>

                <!-- nav usser -->
                <div class="user">
                    <div class="settings_header">
                        <ion-icon name="settings-outline"></ion-icon>
                    </div>
                    <div class="profile" style="<?php if (!empty($_SESSION["id"])) {
                                                    echo "display:block!important;";
                                                } else {
                                                    echo "";
                                                } ?>">
                        <img src="<?php echo $row['imgUser']; ?>" alt="">
                        <!-- <ul class="nav_profile">
                            <li><a href="">
                                    <ion-icon name="person-circle-outline"></ion-icon>Cập nhật thông tin
                                </a></li>
                            <li><a href="">
                                    <ion-icon name="cloud-upload-outline"></ion-icon> Tải lên
                                </a></li>
                            <span></span>
                            <li><a href="./php/logout.php">
                                    <ion-icon name="log-out-outline"></ion-icon>Log out
                                </a></li>
                        </ul> -->
                    </div>
                    <div class="nav_login" style="<?php if (!empty($_SESSION["id"])) {
                                                        echo "display:none;";
                                                    } else {
                                                        echo "display:flex;";
                                                    } ?>">
                        <button><a href="./php/register.php">Đăng kí</a></button>
                        <button><a href="./php/login.php">Đăng nhập</a></button>
                    </div>

                </div>
            </header>

            <main>
                <!-- Trang chu -->
                <div class="home" id="home">
                    <div class="first_home same_flex">
                        <div class="title_home">
                            Nổi bật
                            <a href="#">Hiện tất cả</a>
                        </div>
                        <ul>
                            <!-- render -->
                        </ul>
                    </div>
                    <div class="second_home same_flex">
                        <div class="title_home">
                            Spotify Playlists
                            <a href="#">Hiện tất cả</a>

                        </div>
                        <ul class="music">
                            <!-- render -->
                        </ul>
                    </div>
                </div>

                <!-- mian play music -->
                <div class="play_music">
                    <div class="sub_left">
                        <div class="audio">
                            <img src="./image/song8.jpg" alt="">
                            <div class="runAudio">
                                <div><span></span><span></span><span></span><span></span></div>
                            </div>
                        </div>
                        <div class="name_music"></div>
                        <div class="des">
                            <div class="author"></div>
                            <span>-</span>
                            <div class="releaseDate">07/07/2022</div>
                        </div>
                        <div class="like">3 người yêu thích</div>
                        <div class="controls">
                            <button class="btnPlay active">
                                <ion-icon name="play-outline"></ion-icon> TIẾP TỤC PHÁT
                            </button>
                            <button class="btnPause">
                                <ion-icon name="pause-outline"></ion-icon> TẠM DỪNG
                            </button>
                        </div>
                        <div class="anotherChoice">
                            <div class="<?php
                                        if (!empty($_SESSION["id"])) {
                                            echo "add_library";
                                        } else {
                                            echo "";
                                        }
                                        ?>" style="margin-right: 10px;">
                                <ion-icon name="heart"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                            </div>
                        </div>
                    </div>


                    <div class="sub_right same_list_music">
                        <div class="list_music_playing">
                            <div class="titleHeaderMusic">
                                <div>BÀI HÁT</div>
                                <div>THỜI GIAN</div>
                            </div>
                            <ul class="music">
                                <!-- render list music -->
                            </ul>
                        </div>

                        <div class="list_music_render careMusic">
                            <div class="titleListCare">CÓ THỂ BẠN QUAN TÂM</div>
                            <ul class="
                                                    <?php
                                                    if (!empty($_SESSION["id"])) {
                                                        echo "render ";
                                                    } else {
                                                        echo " ";
                                                    }
                                                    ?> music">
                                <!-- render music care -->
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- discover - kham pha -->
                <div id="discover">
                    <div class="slider_music">
                        <ul>
                            <li><img src="image/song1.jpg" alt="1"></li>
                            <li><img src="image/song2.jpg" alt="2"></li>
                            <li><img src="image/song3.jpg" alt="3"></li>

                        </ul>
                        <div class="prevSlider">
                            <ion-icon name="chevron-back-outline"></ion-icon>
                        </div>
                        <div class="nextSlider">
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="new_music same_list_music">
                        <div class="title">
                            Mới phát hành
                        </div>
                        <ul class="nav_country">
                            <div>
                                <li class="active"><a href="#">TẤT CẢ</a></li>
                                <li><a href="#">VIỆT NAM</a></li>
                                <li><a href="#">QUỐC TẾ</a></li>
                            </div>
                            <li class="showAll">
                                <a href="#">
                                    Tất cả
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                </a>
                            </li>
                        </ul>
                        <div class="list_music_render">
                            <ul class=" <?php
                                        if (!empty($_SESSION["id"])) {
                                            echo "render ";
                                        } else {
                                            echo " ";
                                        }
                                        ?> music list_music music">">
                                <!-- render -->

                            </ul>
                        </div>
                    </div>
                </div>

                <!-- library - thu vien -->
                <div class="library" id="library">
                    <h1 class="header_library">
                        THƯ VIỆN
                        <ion-icon name="play"></ion-icon>
                    </h1>
                    <ul class="nav_library">
                        <li class="active"><a href="#">BÀI HÁT</a></li>
                        <li><a href="#">ALBUM</a></li>
                        <li><a href="#">MV</a></li>
                    </ul>

                    <script>
                    let nav_library = document.querySelectorAll('.library .nav_library li');
                    nav_library.forEach(item => {
                        item.addEventListener('click', () => {
                            document.querySelector('.library .nav_library li.active').classList
                                .remove('active');
                            item.classList.add('active');
                        })
                    })
                    </script>

                    <span class="line"></span>
                    <ul class="sub_nav_library">
                        <li class="active"><a href="">Yêu thích</a></li>
                        <li><a href="">Đã tải lên</a></li>

                    </ul>
                    <div class="same_list_music" id="list_music_library">
                        <div class="list_music_render">
                            <div class="titleHeaderMusic">
                                <div>BÀI HÁT</div>
                                <div>THỜI GIAN</div>
                            </div>
                            <ul class="
                                <?php
                                if (!empty($_SESSION["id"])) {
                                    echo "render ";
                                } else {
                                    echo " ";
                                }
                                ?>
                            music">
                                <!-- render list music -->
                                <li>
                                    Không có bài hát nào
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>


            <!-- fixed bottom -->
            <div class="musicFixed">
                <div class="leftMusicFixed">
                </div>
                <div class="centerMusicFixed">
                    <ul class="navMusicFixed">
                        <li class="randomMusic">
                            <ion-icon name="shuffle-outline"></ion-icon>
                        </li>
                        <li class="prevMusic">
                            <ion-icon name="play-skip-back-outline"></ion-icon>
                        </li>
                        <li class="controlsMusic">
                            <div class="play_music_fixed active">
                                <ion-icon name="play-outline"></ion-icon>
                            </div>
                            <div class="pause_music_fixed">
                                <ion-icon name="pause-outline"></ion-icon>
                            </div>
                        </li>
                        <li class="nextMusic">
                            <ion-icon name="play-skip-forward-outline"></ion-icon>
                        </li>
                        <li class="repeatMusic">
                            <ion-icon name="repeat-outline"></ion-icon>
                        </li>
                    </ul>

                    <div class="sliderMusic">
                        <div class="runTime">00:00</div>
                        <div class="slider">
                            <input id="progress" class="progress" type="range" value="0" step="1" min="0" max="100">
                            <div class="progressColor"></div>
                        </div>
                        <div class="sumTime">00:00</div>
                    </div>
                </div>

                <div class="rightMusicFixed">
                    <div class="volumeMusic">
                        <ion-icon name="volume-high-outline" class="high active"></ion-icon>
                        <ion-icon name="volume-mute-outline" class="mute"></ion-icon>
                        <div class="sliderMusic">
                            <div class="slider">
                                <input id="volumn" class="progress" type="range" value="50" min="0" max="100">
                                <div class="progressColor"></div>
                            </div>
                        </div>
                    </div>
                    <div class="btn_run_listPlaymusic">
                        <ion-icon name="list-outline"></ion-icon>
                    </div>
                </div>
            </div>

        </div>
    </div>


    <!-- Danh sach phat fixed right -->
    <div class="list_play_music same_fixed_right ">
        <h2 style="text-align: center;padding:12px 0">Danh sách phát</h2>
        <div class="same_list_music playing_music">
            <div class="list_music_render">
                <div class="title_bold">Đang phát</div>
                <ul class="
                    <?php
                    if (!empty($_SESSION["id"])) {
                        echo "render ";
                    } else {
                        echo " ";
                    }
                    ?>
                music">

                </ul>
            </div>
        </div>

        <div class="same_list_music next_music_list">
            <div class="list_music_render waiting_music">
                <div class="title_bold" style="margin-top: 16px;">Tiếp theo</div>
                <ul class="music
                    <?php
                    if (!empty($_SESSION["id"])) {
                        echo "render ";
                    } else {
                        echo " ";
                    }
                    ?>
                music">

                </ul>
            </div>
        </div>
    </div>

    <!-- profile -->
    <div class="same_fixed_right update_profile">
        <div class="header_profile">
            <span class="close_profile">
                <ion-icon name="close"></ion-icon>
            </span>
            <span><a href="./php/changePassword.php" style="text-decoration:underline;">Đổi mật khẩu</a></span>
        </div>
        <div class="main_profile">
            <div class="imgUser">
                <img src="./image/song3.jpg" alt="">
                <ion-icon name="camera"></ion-icon>
            </div>
            <ul>
                <li>
                    <h3 class="nameUser"><?php
                                            if (!empty($_SESSION['id'])) {
                                                echo $row['fullname'];
                                            } else {
                                                echo "";
                                            }
                                            ?></h3>
                    <ion-icon name="pencil"></ion-icon>
                </li>
                <li>
                    <?php
                    if (!empty($_SESSION['id'])) {
                        list($year, $month, $date) = explode('-', $row['birthday']);
                        echo "$date-$month-$year";
                    } else {
                        echo "";
                    }
                    ?>
                </li>
                <li>
                    <div class="videoUp">
                        <div class="quatity">50</div>
                        <span>Video</span>
                    </div>
                    <div class="subscribers">
                        <div class="quatity">24k</div>
                        <span>Subscribers</span>
                    </div>
                </li>
            </ul>
        </div>

        <div class="nav_profile_user">
            <button class="active"><a href="#" id="upload">Up load<ion-icon name="cloud-upload-outline"></ion-icon>
                </a></button>
            <button><a href="./php/logout.php">Log out
                    <ion-icon name="log-out-outline"></ion-icon>
                </a>
            </button>

        </div>

        <div class="same_list_music next_music_list">
            <div class="list_music_render playlist">
                <div class="title_bold" style="margin-top: 30px; font-weight:bold;font-size:20px">Playlist</div>
                <ul class="">
                    <li>
                        <div class="playlist_item">
                            <img src="./image/song2.jpg" alt="">
                            <div class="name_playlist">Mùa của cô đơn</div>
                        </div>
                    </li>
                    <li>
                        <div class="playlist_item">
                            <img src="./image/song1.jpg" alt="">
                            <div class="name_playlist">Mùa của cô đơn</div>
                        </div>
                    </li>
                    <li>
                        <div class="playlist_item">
                            <img src="./image/song3.jpg" alt="">
                            <div class="name_playlist">Mùa của cô đơn</div>
                        </div>
                    </li>
                    <li>
                        <div class="playlist_item">
                            <img src="./image/song3.jpg" alt="">
                            <div class="name_playlist">Mùa của cô đơn</div>
                        </div>
                    </li>
                    <li>
                        <div class="playlist_item">
                            <img src="./image/song3.jpg" alt="">
                            <div class="name_playlist">Mùa của cô đơn</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>


    <!-- create playlist -->
    <div id="playlist" class="form_upload">
        <div>
            <h3>Tạo playlist mới</h3>
            <form id="form_upload" method="POST" enctype="multipart/form-data">
                <input type="text" placeholder="Nhập tên playlist"><br>
                <div class="img_upload">
                    <label for="fileUpload">Ảnh nền: </label>
                    <input type="file" name="fileUpload" id="fileUpload">
                </div>
                <input type="button" value="Tạo mới">
            </form>
            <ion-icon name="close" class="close_form"></ion-icon>
        </div>
    </div>

    <!-- form upload video -->
    <div class="form_upload form_upload_music" id="form_upload_music">
        <div>
            <h3>Upload music</h3>
            <form id="" method="POST" enctype="multipart/form-data">
                <input type="text" placeholder="Nhập tên bài hát"><br>
                <input type="text" placeholder="Nhập tên tác giả"><br>
                <div class="img_upload">
                    <label for="fileUpload">Liên kết: </label>
                    <input type="file" name="fileUploadMusic" id="fileUploadMusic">
                </div>
                <input type="button" value="Đăng">
            </form>
            <ion-icon name="close" class="close_form"></ion-icon>
        </div>
    </div>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="./js/app.js" type="module"></script>

</body>

</html>