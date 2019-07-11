CREATE TABLE `geolingo`.`new_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(256) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);