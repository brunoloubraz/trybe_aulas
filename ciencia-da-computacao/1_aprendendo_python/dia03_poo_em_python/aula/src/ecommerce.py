from dataclasses import dataclass
import json

class Customer:
    def __init__(self, name: str, email: str, address: str):
        self.name = name
        self.email = email
        self.address = address

    @property
    def email(self):
        return self.__email
    
    @email.setter
    def email(self, new_email):
        if "@" not in new_email:
            raise ValueError("Invalid email")
        self.__email = new_email

    def show_details(self):
        return f"{self.name} - {self.email} = {self.address}"

    def __repr__(self):
        return f"Customer({self.name}, {self.email}, {self.address})"
    
    def __str__(self):
        return f"Customer({self.name} -> {self.email} -> {self.address})"
    
    @classmethod
    def load_customers_from_json(cls, file_path: str):
        with open(file_path, "r") as file:
            customers = json.load(file)
        return [cls(**customer) for customer in customers]

# DTO -> Data transfer object
@dataclass
class Product:
    name: str
    unit_price: float
    stock_quantity: int

class ShoppingCart:
    def __init__(self):
        self._items = []
    
    def add_item(self, car_item: tuple[Product, int]):
        self._items.append(car_item)

    def items_quantity(self):
        return sum([quantity for _, quantity in self._items])
    
    def total_price(self):
        return sum([product.unit_price * quantity for product, quantity in self._items])