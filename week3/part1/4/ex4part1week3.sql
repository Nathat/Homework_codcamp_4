/*4a*/
SELECT PARTS.part_name, PARTS.product_id ,PRODUCTS.price
FROM PARTS
LEFT JOIN PRODUCTS ON PARTS.product_id = PRODUCTS.product_id;

/*4b*/
SELECT PARTS.part_name, PARTS.product_id ,PRODUCTS.price
FROM PARTS
RIGHT JOIN PRODUCTS ON PARTS.product_id = PRODUCTS.product_id;

/*4C*/
SELECT PARTS.part_name, PARTS.product_id ,PRODUCTS.price FROM PARTS
LEFT JOIN PRODUCTS ON PARTS.product_id = PRODUCTS.product_id
UNION
SELECT PARTS.part_name, PARTS.product_id ,PRODUCTS.price FROM PARTS
RIGHT JOIN PRODUCTS ON PARTS.product_id = PRODUCTS.product_id;

/*4d*/
SELECT PARTS.part_name,PARTS.product_id,PRODUCTS.price
FROM PARTS
INNER JOIN PRODUCTS
ON PARTS.product_id = PRODUCTS.product_id;