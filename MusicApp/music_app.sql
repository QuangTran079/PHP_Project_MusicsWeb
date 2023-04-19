-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 19, 2023 at 01:45 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `music_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `lb_id` int(11) NOT NULL,
  `m_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `library`
--

INSERT INTO `library` (`lb_id`, `m_id`, `u_id`) VALUES
(31, 1, 2),
(32, 2, 2),
(33, 3, 2),
(34, 4, 2),
(35, 5, 2),
(36, 6, 2),
(37, 7, 2),
(38, 8, 2),
(39, 8, 1),
(40, 7, 1),
(41, 4, 1),
(42, 5, 1),
(43, 2, 1),
(44, 1, 1),
(45, 3, 1),
(46, 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `musics`
--

CREATE TABLE `musics` (
  `m_id` int(11) NOT NULL,
  `m_name` varchar(200) NOT NULL,
  `m_location` varchar(200) NOT NULL,
  `m_img` varchar(200) NOT NULL,
  `m_artist` varchar(200) NOT NULL,
  `m_nation` varchar(50) NOT NULL,
  `m_category` varchar(100) NOT NULL,
  `pl_id` int(11) NOT NULL,
  `lb_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `playlist`
--

CREATE TABLE `playlist` (
  `pl_id` int(11) NOT NULL,
  `pl_name` varchar(100) NOT NULL,
  `pl_img` varchar(200) NOT NULL,
  `m_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `upload_videos`
--

CREATE TABLE `upload_videos` (
  `uv_id` int(11) NOT NULL,
  `name_video_upload` varchar(200) NOT NULL,
  `artist_video_upload` varchar(50) NOT NULL,
  `location_video_upload` varchar(200) NOT NULL,
  `u_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `u_id` int(11) NOT NULL,
  `fullname` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(40) NOT NULL,
  `birthday` date NOT NULL,
  `gender` enum('male','female','not','other','private') NOT NULL,
  `imgUser` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `fullname`, `email`, `password`, `birthday`, `gender`, `imgUser`) VALUES
(1, 'Luu Truong An', 'anluu099@gmail.com', 'e4c28e2a32bacaa140533f3507c4fe07', '2002-04-24', 'male', ''),
(2, 'Luu Truong Vu', 'anluu0099@gmail.com', 'e4c28e2a32bacaa140533f3507c4fe07', '1999-06-09', 'male', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`lb_id`),
  ADD KEY `u_id` (`u_id`);

--
-- Indexes for table `musics`
--
ALTER TABLE `musics`
  ADD PRIMARY KEY (`m_id`),
  ADD KEY `pl_id` (`pl_id`),
  ADD KEY `lb_id` (`lb_id`);

--
-- Indexes for table `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`pl_id`),
  ADD KEY `m_id` (`m_id`),
  ADD KEY `u_id` (`u_id`);

--
-- Indexes for table `upload_videos`
--
ALTER TABLE `upload_videos`
  ADD PRIMARY KEY (`uv_id`),
  ADD KEY `u_id` (`u_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `library`
--
ALTER TABLE `library`
  MODIFY `lb_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `musics`
--
ALTER TABLE `musics`
  MODIFY `m_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `playlist`
--
ALTER TABLE `playlist`
  MODIFY `pl_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `upload_videos`
--
ALTER TABLE `upload_videos`
  MODIFY `uv_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `library`
--
ALTER TABLE `library`
  ADD CONSTRAINT `library_ibfk_1` FOREIGN KEY (`u_id`) REFERENCES `users` (`u_id`);

--
-- Constraints for table `musics`
--
ALTER TABLE `musics`
  ADD CONSTRAINT `musics_ibfk_1` FOREIGN KEY (`pl_id`) REFERENCES `playlist` (`pl_id`),
  ADD CONSTRAINT `musics_ibfk_2` FOREIGN KEY (`lb_id`) REFERENCES `library` (`lb_id`);

--
-- Constraints for table `playlist`
--
ALTER TABLE `playlist`
  ADD CONSTRAINT `playlist_ibfk_1` FOREIGN KEY (`u_id`) REFERENCES `users` (`u_id`);

--
-- Constraints for table `upload_videos`
--
ALTER TABLE `upload_videos`
  ADD CONSTRAINT `upload_videos_ibfk_1` FOREIGN KEY (`u_id`) REFERENCES `users` (`u_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
