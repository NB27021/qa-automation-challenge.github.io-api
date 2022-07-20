INSERT INTO `campaigns` (`id`, `campaign`, `value`) VALUES
	(1, 'Top (24 months)', 30),
	(2, 'Pro+ (12 months)', 20),
	(3, 'Simple (6 months)', 10);

INSERT INTO `discounts` (`id`, `discount`, `value`) VALUES
	(1, 'worker', 20),
	(2, 'family', 30),
	(3, 'student', 40);

INSERT INTO `plans` (`id`, `plan`, `description`, `value`) VALUES
	(1, 'Unlimited Top', 'Unlimited Download, Upload, Streaming, Roaming and Hotspotting', 30),
	(2, 'Unlimited', 'Unlimited Download, Upload and Streaming', 20),
	(3, 'Unlimited Lite', 'Unlimited Download and Upload', 10);

INSERT INTO `products` (`id`, `product`, `value`) VALUES
	(1, 'TV + Net + Voice', 40),
	(2, 'TV + Net', 30),
	(3, 'TV + Voice', 20),
	(4, 'TV Only', 17.5),
	(5, 'Net Only', 15),
	(6, 'Voice Only', 12.5);

INSERT INTO `users` (`id`, `username`, `password`) VALUES
	(1, 'admin', 'U2FsdGVkX18uEny7G1wIkbe9xp/Q5u7ndhCtMeSgVlI='),
	(2, 'regular', 'U2FsdGVkX19+QM1iy9Hqz0SOBhVOC5itnQAxN88i8lt2GPzhKEF0DoZ46aZQUcJn');

INSERT INTO `contacts` (`id`, `name`, `contact`) VALUES
	(1, 'Contact Name', 'contact_name@email.com');