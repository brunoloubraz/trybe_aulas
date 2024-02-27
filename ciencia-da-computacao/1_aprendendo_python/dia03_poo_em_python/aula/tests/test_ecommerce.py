import pytest
from src.ecommerce import Customer

def test_customer_creation():
    customer = Customer("John Doe", "johndoe@examplem", "123 street")
    assert customer.name == "John Doe"