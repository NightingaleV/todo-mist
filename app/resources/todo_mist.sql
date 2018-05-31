-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Čtv 31. kvě 2018, 18:25
-- Verze serveru: 10.1.31-MariaDB
-- Verze PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `todo_mist`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `projects`
--

CREATE TABLE `projects` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `project` varchar(60) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Vypisuji data pro tabulku `projects`
--

INSERT INTO `projects` (`id`, `user_id`, `project`) VALUES
(1, 18, 'Inbox'),
(3, 18, 'Save the Middle Earth');

-- --------------------------------------------------------

--
-- Struktura tabulky `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `user_id` int(10) NOT NULL,
  `tag` varchar(15) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Struktura tabulky `tasks`
--

CREATE TABLE `tasks` (
  `id` int(10) NOT NULL,
  `project_id` int(10) NOT NULL,
  `position` int(10) NOT NULL,
  `task` text COLLATE utf8_bin NOT NULL,
  `priority` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Vypisuji data pro tabulku `tasks`
--

INSERT INTO `tasks` (`id`, `project_id`, `position`, `task`, `priority`) VALUES
(1, 3, 0, 'Go to the mordor', 1),
(2, 3, 0, 'Destroy the ring', 1),
(3, 3, 0, 'Defeat a Sauron', 2),
(4, 3, 0, 'write a book', 3),
(5, 3, 0, 'Learn some magic tricks with spiky hat', 4),
(6, 3, 0, 'write a book', 3),
(7, 3, 0, 'Learn some magic tricks with spiky hat', 4),
(8, 3, 0, 'Buy some Halflings Leaf from local deal... ehm farmer', 4);

-- --------------------------------------------------------

--
-- Struktura tabulky `task_tags_bridge`
--

CREATE TABLE `task_tags_bridge` (
  `task_id` int(10) NOT NULL,
  `tag_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Struktura tabulky `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `username` varchar(30) COLLATE utf8_bin NOT NULL,
  `email` varchar(40) COLLATE utf8_bin NOT NULL,
  `password` varchar(60) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Vypisuji data pro tabulku `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(18, 'vitezslavik', 'vitezslavik@gmail.com', '$2y$10$QM2admwjl7NGnkz9D4eC8.i5TQy8DM00KOXI9qREoWOgUvFuSiKt2');

--
-- Klíče pro exportované tabulky
--

--
-- Klíče pro tabulku `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`) USING BTREE;

--
-- Klíče pro tabulku `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id` (`user_id`);

--
-- Klíče pro tabulku `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_id` (`project_id`);

--
-- Klíče pro tabulku `task_tags_bridge`
--
ALTER TABLE `task_tags_bridge`
  ADD KEY `task_id` (`task_id`,`tag_id`),
  ADD KEY `tag_id` (`tag_id`);

--
-- Klíče pro tabulku `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pro tabulku `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pro tabulku `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pro tabulku `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Omezení pro tabulku `tags`
--
ALTER TABLE `tags`
  ADD CONSTRAINT `tags_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Omezení pro tabulku `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`);

--
-- Omezení pro tabulku `task_tags_bridge`
--
ALTER TABLE `task_tags_bridge`
  ADD CONSTRAINT `task_tags_bridge_ibfk_1` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`),
  ADD CONSTRAINT `task_tags_bridge_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
