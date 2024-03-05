def dog(job):
    if 'min_salary' not in job or 'max_salary' not in job:
        raise ValueError

  
print(dog({'min_salary': 2000, 'max_salary': 2000}))