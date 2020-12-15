CREATE DATABASE  IF NOT EXISTS `unibo` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `unibo`;
-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: unibo
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `complent_message`
--

DROP TABLE IF EXISTS `complent_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `complent_message` (
  `idcomplent_message` int NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `output_message` text NOT NULL,
  PRIMARY KEY (`idcomplent_message`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complent_message`
--

LOCK TABLES `complent_message` WRITE;
/*!40000 ALTER TABLE `complent_message` DISABLE KEYS */;
INSERT INTO `complent_message` VALUES (29,'信實男生宿舍在哪裡？','位在320桃園市中壢區普忠路210號。若需要更詳細的資訊可以上他們的FB粉絲團～https://www.facebook.com/111831668905915'),(30,'信實女生宿舍在哪裡？','位在320桃園市中壢區普忠路210號。若需要更詳細的資訊可以上他們的FB粉絲團～https://www.facebook.com/111831668905915'),(31,'熱誠男生宿舍在哪裡？','320桃園市中壢區普忠路206號(男宿)。若需要更詳細的資訊可以上他們的FB粉絲團～https://www.facebook.com/ReChengDorm.CYCU/'),(32,'熱誠女生宿舍在哪裡？','320桃園市中壢區普忠路206號(女宿)。若需要更詳細的資訊可以上他們的FB粉絲團～https://www.facebook.com/ReChengDorm.CYCU/'),(33,'力行宿舍在哪裡？','320桃園市中壢區新中北路291號。若需要更詳細的資訊可以上他們的FB粉絲團～https://zh-tw.facebook.com/CYCU.LiHsing'),(34,'恩慈宿舍在哪裡？','320桃園市中壢區中北路200號恩慈樓。若需要更詳細的資訊可以上他們的FB粉絲團～https://zh-tw.facebook.com/EnTzuDorm'),(35,'良善宿舍在哪裡？','320桃園市中壢區大仁街82號。若需要更詳細的資訊可以上他們的FB粉絲團～https://www.facebook.com/LianShanDorm/'),(36,'更詳細的住宿資訊','給您中原的新生一網通的連結，希望這裡有您會想要的資訊～https://fm.cycu.edu.tw/main_d_01A.html?type=A'),(37,'宿舍抽籤時間','舊生請至itouch登入帳號，並到「生活區」的「個人申請查詢」->點擊「學生住宿申請」，即可申請抽籤下學期的住宿並得知抽籤時間。'),(40,'研究生如何申請學校宿舍？','研究所新生住宿採書面方式申請。更詳盡的資訊請至：https://fm.cycu.edu.tw/main_d_02B_1.html?type=B#02'),(41,'申請學校住宿有無優先順序？','身心障礙學生（檢附本人身心障礙手冊影本）、低收入戶或中低收入戶學生（需附當年度鄉鎮市區公所證明）可優先住宿外；其餘學生住宿核准優先次序依據宿舍管理辦法。申請名額若不超過學生宿舍容納量，則全部准予住校；若超過學生宿舍容納量，則以抽籤方式決定之。'),(42,'宿舍床位如何分配？','由學校統一安排床位。除力行男生宿舍6人一間，其餘宿舍皆為4人一間。'),(43,'宿舍有哪些寢具設備？','寢室內有床舖（自備床墊）、衣櫃、書桌、書架、置物櫃、鞋櫃、桌燈、冷氣、電扇、電話及宿舍網路(自備網路線)。'),(44,'信實宿舍一學期住宿費用多少？','信實男女宿舍的住宿費每學期皆是12,000元～一寢4人，若有需要更詳盡的資訊請至：https://fm.cycu.edu.tw/main_d_01B.html?type=B'),(45,'熱誠宿舍一學期住宿費用多少？','熱誠男女宿舍的住宿費每學期皆是15,000元～一寢4人，若有需要更詳盡的資訊請至：https://fm.cycu.edu.tw/main_d_01B.html?type=B'),(46,'宿舍床位尺寸？何處可購買？','信實宿舍→床墊尺寸為96CM*196CM\n熱誠宿舍→床墊尺寸為94.8CM*197.5CM\n'),(47,'宿舍有哪些家電用品是可以帶的？','可帶家電用品如：電腦、收音機、吹風機。為維護宿舍安全，寢室內嚴禁使用其它家電(如電鍋、烤箱、電熱水瓶、電暖器、熨斗、除濕機、冰箱等)。'),(48,'宿舍有哪些家電用品是不可以帶的？','為維護宿舍安全，寢室內嚴禁使用其它家電(如電鍋、烤箱、電熱水瓶、電暖器、熨斗、除濕機、冰箱等)。'),(49,'宿舍內是否有提供電腦供住宿生使用？','宿舍內設有自由上網區、彩色列表機及視聽教學專用區，供住宿生上網查詢資料及列印作業。'),(50,'宿舍有無門禁時間管制？','為加強宿舍安全管理與維護，住宿學生均須使用學生證進出。 \n為維護住宿安全，宿舍每晚24:00至次日凌晨6:00實施門禁，24:00後進、出者需依規定申請夜間進出同意書，且需自主簽名述名事由；並依宿舍門禁及晚點名規範辦理。\n'),(51,'宿舍開放訪客時間為何？','訪客時間： 女舍限女性訪客，男舍限男性訪客。訪客進入請依規定換證並辦理訪客登記。\n（一）上午8：30~12：00\n（二）下午13：30~21：00\n'),(52,'宿舍熱水供應時間？','宿舍除信實宿舍採電熱水器外，餘宿舍均使用熱泵遠端控制系統供應熱水，依各宿舍公告供應。'),(53,'核准住宿後可住多久？','凡申請住宿者，依規定應住滿一學年（含上、下學期），不得在學年中請求退宿、退費（患法定傳染病者除外）。'),(54,'信實住宿有問題可以找誰協助？','信實女生宿舍→指導老師電話：03-2657601、2657602\n傳達室電話：03-2657600\n信實男生宿舍→指導老師電話：03-2657606\n傳達室電話：03-2657700\n'),(55,'熱誠宿舍一學期住宿費多少？','1000');
/*!40000 ALTER TABLE `complent_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `feedback` (
  `idfeedback` int NOT NULL AUTO_INCREMENT,
  `feedback_name` varchar(45) NOT NULL,
  `feedback_title` varchar(45) NOT NULL,
  `feedback_content` longtext NOT NULL,
  PRIMARY KEY (`idfeedback`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,'123','456','789');
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `select_message`
--

DROP TABLE IF EXISTS `select_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `select_message` (
  `idselect_message` int NOT NULL AUTO_INCREMENT,
  `item` text NOT NULL,
  `complent` int NOT NULL,
  PRIMARY KEY (`idselect_message`),
  KEY `fk1_idx` (`complent`),
  CONSTRAINT `fk1` FOREIGN KEY (`complent`) REFERENCES `complent_message` (`idcomplent_message`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=212 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `select_message`
--

LOCK TABLES `select_message` WRITE;
/*!40000 ALTER TABLE `select_message` DISABLE KEYS */;
INSERT INTO `select_message` VALUES (1,'信實',29),(2,'男生',29),(3,'宿舍',29),(4,'在',29),(5,'哪裡',29),(6,'？',29),(7,'信實',30),(8,'女生',30),(9,'宿舍',30),(10,'在',30),(11,'哪裡',30),(12,'？',30),(13,'熱誠',31),(14,'男生',31),(15,'宿舍',31),(16,'在',31),(17,'哪裡',31),(18,'？',31),(19,'熱誠',32),(20,'女生',32),(21,'宿舍',32),(22,'在',32),(23,'哪裡',32),(24,'？',32),(25,'力行',33),(26,'宿舍',33),(27,'在',33),(28,'哪裡',33),(29,'？',33),(30,'恩慈',34),(31,'宿舍',34),(32,'在',34),(33,'哪裡',34),(34,'？',34),(35,'良善',35),(36,'宿舍',35),(37,'在',35),(38,'哪裡',35),(39,'？',35),(40,'更',36),(41,'詳細',36),(42,'的',36),(43,'住宿',36),(44,'資訊',36),(45,'住宿',36),(46,'宿舍',36),(47,'宿舍',36),(48,'宿舍',37),(49,'抽籤',37),(50,'時間',37),(71,'研究',40),(72,'研究生',40),(73,'如何',40),(74,'申請',40),(75,'學校',40),(76,'宿舍',40),(77,'？',40),(78,'申請',41),(79,'學校',41),(80,'住宿',41),(81,'有無',41),(82,'優先',41),(83,'順序',41),(84,'？',41),(85,'宿舍',42),(86,'床位',42),(87,'如何',42),(88,'分配',42),(89,'？',42),(90,'宿舍',43),(91,'有',43),(92,'哪',43),(93,'些',43),(94,'寢具',43),(95,'設備',43),(96,'？',43),(97,'信實',44),(98,'宿舍',44),(99,'一',44),(100,'學期',44),(101,'住宿',44),(102,'住宿費',44),(103,'費用',44),(104,'多',44),(105,'少',44),(106,'？',44),(107,'熱誠',45),(108,'宿舍',45),(109,'一',45),(110,'學期',45),(111,'住宿',45),(112,'住宿費',45),(113,'多',45),(114,'少',45),(115,'？',45),(116,'費用',45),(117,'宿舍',46),(118,'床位',46),(119,'尺寸',46),(120,'？',46),(121,'何處',46),(122,'可',46),(123,'購買',46),(124,'？',46),(125,'大小',46),(126,'床',46),(127,'床墊',46),(128,'宿舍',47),(129,'有',47),(130,'哪',47),(131,'些',47),(132,'家電',47),(133,'用品',47),(134,'是',47),(135,'可以',47),(136,'帶',47),(137,'的',47),(138,'？',47),(139,'宿舍',48),(140,'有',48),(141,'哪',48),(142,'些',48),(143,'家電',48),(144,'用品',48),(145,'是不',48),(146,'不可',48),(147,'不可以',48),(148,'可以',48),(149,'帶',48),(150,'的',48),(151,'？',48),(152,'宿舍',49),(153,'內',49),(154,'是否',49),(155,'有',49),(156,'提供',49),(157,'供電',49),(158,'電腦',49),(159,'供住',49),(160,'住宿',49),(161,'住宿生',49),(162,'宿生',49),(163,'使用',49),(164,'？',49),(165,'宿舍',50),(166,'有無',50),(167,'無門',50),(168,'門禁',50),(169,'時間',50),(170,'管制',50),(171,'？',50),(172,'宿舍',51),(173,'開放',51),(174,'訪客',51),(175,'時間',51),(176,'為何',51),(177,'？',51),(178,'宿舍',52),(179,'熱水',52),(180,'供應',52),(181,'應時',52),(182,'時間',52),(183,'？',52),(184,'住宿',33),(185,'住宿',34),(186,'住宿',35),(187,'核准',53),(188,'住宿',53),(189,'後',53),(190,'可',53),(191,'住',53),(192,'多久',53),(193,'？',53),(194,'信實',54),(195,'住宿',54),(196,'有',54),(197,'問題',54),(198,'可以',54),(199,'找',54),(200,'誰',54),(201,'協助',54),(202,'？',54),(203,'熱誠',55),(204,'宿舍',55),(205,'一',55),(206,'學期',55),(207,'住宿',55),(208,'住宿費',55),(209,'多',55),(210,'少',55),(211,'？',55);
/*!40000 ALTER TABLE `select_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'unibo'
--

--
-- Dumping routines for database 'unibo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-15 15:56:55
