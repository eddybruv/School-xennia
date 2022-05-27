USE Orders;
CREATE TABLE Customers (
    CustomerID VARCHAR(5) NULL PRIMARY KEY,
    CompanyName VARCHAR(40) NOT NULL,
    ContactName VARCHAR(30) NULL,
    contactTitle VARCHAR(30) NULL,
    Address VARCHAR(60) NULL,
    City VARCHAR(15) NULL,
    Region VARCHAR(15) NULL,
    PostalCode VARCHAR(10) NULL,
    Country VARCHAR(15) NULL DEFAULT 'Canada',
    Phone VARCHAR(24) NULL,
    Fax VARCHAR(24) NULL
);
CREATE TABLE Shippers(
    ShipperID INT NOT NULL PRIMARY KEY,
    CompanyName VARCHAR(40) NOT NULL
);
CREATE TABLE Orders(
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
    ShippedDate DATE NULL,
    Freight INT NULL,
    FOREIGN KEY(CustomerID) REFERENCES Customers(CustomerID)
);
CREATE TABLE OrderDetails(
    OrderID INT NULL PRIMARY KEY,
    ProductID INT NULL PRIMARY KEY,
    UnitPrice INT NOT NULL,
    Quantity SMALLINT NOT NULL,
    Discount REAL NOT NULL,
    FOREIGN KEY(OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY(ProductID) REFERENCES Products(ProductID)
);
CREATE TABLE Products(
    ProductID INT NOT NULL PRIMARY KEY,
    SupplierID INT NULL,
    CategoryID INT NULL,
    ProductName VARCHAR(40) NOT NULL,
    EnglishName VARCHAR(40) NULL,
    QuantityPerUnit VARCHAR(20) NULL,
    UnitPrice INT NULL,
    UnitsInStock SMALLINT NULL,
    UnitInOrder SMALLINT NULL,
    ReorderLevel SMALLINT NULL,
    Discontinued BIT NOT NULL,
    FOREIGN KEY(SupplierID) REFERENCES Supplier(SupplierID)
);
CREATE TABLE Supplier(
    SupplierID INT NULL PRIMARY KEY,
    Name VARCHAR(50) NULL,
    Address VARCHAR(50) NULL,
    City VARCHAR(50) NULL,
    Province VARCHAR(50) NULL
);