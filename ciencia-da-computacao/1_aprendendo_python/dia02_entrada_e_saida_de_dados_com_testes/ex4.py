import json
import csv

with open("books.json", "r", encoding="utf8") as file:
    books = json.load(file)

categories = {}

for item in books:
    for category in item['categories']:
        if not categories.get(category):
            categories[category] = 0
        categories[category] += 1
    
with open('results.csv', 'w', newline='', encoding='utf8') as file:
    writer = csv.writer(file)
    writer.writerow(['Categoria', 'Percentual'])
    for chave, valor in categories.items():
        writer.writerow([chave, f'{(valor/len(books)) * 100}'])

# def retrieve_books(file):
#     return json.load(file)



# def count_books_by_categories(books):
#     categories = {}
#     for book in books:
#         for category in book["categories"]:
#             if not categories.get(category):
#                 categories[category] = 0
#             categories[category] += 1
#     return categories


# def calculate_percentage_by_category(book_count_by_category, total_books):
#     return [
#         [category, num_books / total_books]
#         for category, num_books in book_count_by_category.items()
#     ]


# def write_csv_report(file, header, rows):
#     writer = csv.writer(file)
#     writer.writerow(header)
#     writer.writerows(rows)


# if __name__ == "__main__":
#     # retrieve books
#     with open("books.json") as file:
#         books = retrieve_books(file)

#     # count by category
#     book_count_by_category = count_books_by_categories(books)

#     # calculate percentage
#     number_of_books = len(books)
#     books_percentage_rows = calculate_percentage_by_category(
#         book_count_by_category, number_of_books
#     )

#     # write csv
#     header = ["categoria", "percentagem"]
#     with open("report.csv", "w") as file:
#         write_csv_report(file, header, books_percentage_rows)
