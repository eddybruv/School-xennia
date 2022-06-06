
  
-- Question 1 --
SELECT
    tblOrders.CustomerID,
    tblOrders.OrderID,
    tblOrders.OrderDate
FROM
    tblOrders
WHERE
    tblOrders.OrderDate BETWEEN '2014-01-01'
    AND '2014-12-31';


-- Question 2 --
ALTER TABLE tblCustomers ADD Active BOOLEAN DEFAULT TRUE;

-- Question 3 --
SELECT
    tblCustomers. ,
    tblOrders.OrderDate,
    tblOrders.Freight + (
        tblOrderDetails.UnitPrice * tblOrderDetails.Quantity
    ) AS Total_Amount
FROM
    (
        tblCustomers
        INNER JOIN tblOrders ON tblCustomers.CustomerID = tblOrders.CustomerID
    )
    INNER JOIN tblOrderDetails ON tblOrders.OrderID = tblOrderDetails.OrderID
WHERE
    tblOrders.OrderDate < '2012-09-01 00:00:00';

-- Question 4 --
SELECT
    tblOrders.OrderID,
    tblOrders.ShipName,
    tblOrders.ShipAddress,
    tblOrders.CustomerID
FROM
    tblOrders
    INNER JOIN tblShippers ON tblOrders.Shipvia = tblShippers.ShipperID
WHERE
    tblShippers.CompanyName = 'Federal Shipping';


-- Question 5 --

SELECT
    tblCustomers.CustomerID,
    tblCustomers.Address,
    tblCustomers.CompanyName,
    tblCustomers.ContactTitle,
    tblCustomers.Phone
FROM
    `tblCustomers`
    INNER JOIN tblOrders ON tblCustomers.CustomerID = tblOrders.CustomerID
WHERE
    tblOrders.OrderDate NOT BETWEEN '2011-01-01'
    AND '2011-12-31' 
    
-- Question 6 --
SELECT
    ProductID,
    ProductName,
    UnitPrice,
    UnitsInStock
FROM
    tblProducts
WHERE
    UnitsOnOrder = 0;

-- Question 6 --
SELECT
    ProductID,
    ProductName,
    UnitPrice,
    UnitsInStock
FROM
    tblProducts
WHERE
    UnitsOnOrder = 0;

-- Question 7 --

SELECT
    tblCustomers.CustomerID,
    tblCustomers.ContactName,
    tblOrders.OrderID
FROM
    tblCustomers
    INNER JOIN tblOrders ON tblCustomers.CustomerID = tblOrders.CustomerID
WHERE
    tblCustomers.CustomerID IN (
        SELECT
            CustomerID
        FROM
            tblCustomers
        WHERE
            City = 'London'
    );

--Question 8--

SELECT
    tblProducts.ProductName,
    tblSupplier.Name As Supplier_Name
FROM
    tblSupplier
    INNER JOIN tblProducts ON tblSupplier.SupplierID = tblProducts.SupplierID
WHERE
    tblSupplier.Name = 'Supplier A'
    OR tblSupplier.Name = 'Supplier B';

/* Question 9 */

SELECT
    ProductName,
    QuantityPerUnit
FROM
    tblProducts
WHERE
    QuantityPerUnit LIKE '%boxes%';

-- Part 3 --

CREATE TABLE Employee (
    EmployeeID INT AUTO_INCREMENT REFERENCES tblOrders(EmployeeID),
    LastName VARCHAR(10) NOT NULL,
    FirstName VARCHAR(10) NOT NULL,
    Address VARCHAR(20) NULL,
    City VARCHAR(15) NULL,
    Province VARCHAR(15) NULL,
    PostalCode VARCHAR(10),
    Salary REAL NOT NULL,
    PRIMARY KEY (EmployeeID)
);

INSERT INTO
    Employee (
        EmployeeID,
        LastName,
        FirstName,
        Address,
        City,
        Province,
        PostalCode,
        Salary
    )
VALUES
    (
        1,
        'A',
        "Sonia",
        "Sandpit",
        "Buea",
        "SW",
        "POBox 000",
        0.6
    );

INSERT INTO
    Employee (
        EmployeeID,
        LastName,
        FirstName,
        Address,
        City,
        Province,
        PostalCode,
        Salary
    )
VALUES
    (
        2,
        'A',
        "Eddy",
        "Sandpit",
        "Buea",
        "SW",
        "POBox 000",
        1.3
    );

INSERT INTO
    Employee (
        EmployeeID,
        LastName,
        FirstName,
        Address,
        City,
        Province,
        PostalCode,
        Salary
    )
VALUES
    (
        3,
        'Tambe',
        "Salome",
        "Bakweri Town",
        "Buea",
        "SW",
        "POBox 000",
        0.2
    );

INSERT INTO
    Employee (
        EmployeeID,
        LastName,
        FirstName,
        Address,
        City,
        Province,
        PostalCode,
        Salary
    )
VALUES
    (
        4,
        'A',
        "Rha'ah",
        "Molyko",
        "Buea",
        "SW",
        "POBox 000",
        0.4
    );

INSERT INTO
    Employee (
        EmployeeID,
        LastName,
        FirstName,
        Address,
        City,
        Province,
        PostalCode,
        Salary
    )
VALUES
    (
        5,
        'A',
        "Randy",
        "Molyko",
        "Buea",
        "SW",
        "POBox 000",
        0.9
    );

SELECT * 
from Employee 
INNER JOIN tblOrders 
ON tblOrders.EmployeeID = Employee.EmployeeID;

SELECT tblProducts.ProductName, tblProducts.QuantityPerUnit FROM tblProducts
WHERE tblProducts.QuantityPerUnit LIKE '%boxes%';

ALTER TABLE tblOrders
ADD COLUMN TotalSales INT;

UPDATE tblOrders
SET TotalSales = (SELECT COUNT(OrderID) FROM tblOrderDetails WHERE tblOrders.OrderID = tblOrderDetails.OrderID);

SELECT TotalSales FROM tblOrders;


CREATE DATABASE Orders;

USE Orders;

CREATE TABLE tblCustomers(
    CustomerID VARCHAR(5) NULL PRIMARY KEY,
    CompanyName VARCHAR(40) NOT NULL,
    ContactName VARCHAR(30) NULL,
    ContactTitle VARCHAR(30) NULL,
    Address VARCHAR(60) NULL,
    City VARCHAR(15) NULL,
    Region VARCHAR(15) NULL,
    PostalCode VARCHAR(10) NULL,
    Country VARCHAR(15) NULL DEFAULT "Canada",
    Phone VARCHAR(24) NULL,
    Fax VARCHAR(24) NULL
);

CREATE TABLE tblOrdersDetails (
    OrderID INT NULL,
    ProductID INT NULL,
    UnitPrice REAL NOT NULL,
    Quantity SMALLINT NOT NULL CHECK(Quantity > 0),
    Discount REAL NOT NULL,
    PRIMARY KEY(OrderID, ProductID),
    FOREIGN KEY (OrderID) REFERENCES tblOrders(OrderID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES tblProducts(ProductID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE tblOrders (
    OrderID INT NULL PRIMARY KEY,
    CustomerID VARCHAR(5) NOT NULL,
    EmployeeID INT NULL,
    ShipName VARCHAR(40) NULL,
    ShipAddress VARCHAR(60) NULL,
    ShipCity VARCHAR(15) NULL,
    ShipRegion VARCHAR(15) NULL,
    ShipPostalCode VARCHAR(10) NULL,
    ShipCountry VARCHAR(15) NULL,
    ShipVia INT NULL,
    OrderDate DATE NULL,
    RequiredDate DATE NULL,
    ShippedDate DATE NULL CHECK (ShippedDate > OrderDate),
    Freight REAL NULL,
    FOREIGN KEY (CustomerID) REFERENCES tblCustomers(CustomerID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ShipVia) REFERENCES tblShippers(ShipperID) ON DELETE CASCADE ON UPDATE CASCADE,
);

CREATE TABLE tblProducts (
    ProductID INT NOT NULL PRIMARY KEY,
    SupplierID INT NULL,
    CategoryID INT NULL,
    ProductName VARCHAR(40) NOT NULL,
    EnglishName VARCHAR(40) NULL,
    QuantityPerUnit VARCHAR(40) NOT NULL,
    UnitPrice REAL NULL,
    UnitsInStock SMALLINT NULL,
    UnitsOnOrder SMALLINT NULL,
    ReorderLevel SMALLINT NULL,
    Discountinued BIT NOT NULL,
    FOREIGN KEY (SupplierID) REFERENCES tblSupplier(SupplierID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE tblShippers (
    ShipperID INT NOT NULL PRIMARY KEY,
    CompanyName VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE tblSupplier (
    SupplierID INT NOT NULL PRIMARY KEY,
    Name VARCHAR(50) NULL,
    Address VARCHAR(50) NULL,
    City VARCHAR(50) NULL,
    Province VARCHAR(50) NULL
);