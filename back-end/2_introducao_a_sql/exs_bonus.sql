USE PiecesProviders;
SELECT * FROM Pieces;
SELECT * FROM Providers;
SELECT * FROM Provides;

-- 1
SELECT Piece, Price from Provides
WHERE Provider = "RBT";
-- 2
SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;
-- 3 
SELECT DISTINCT Provider, Price FROM Provides ORDER BY Price DESC LIMIT 10 OFFSET 2;
-- 4
SELECT DISTINCT Piece, Provider, Price FROM Provides WHERE Provider = "HAL" ORDER BY Price DESC;
-- 5
SELECT COUNT(Piece) FROM Provides WHERE Piece = 1;