from django.db import models
import random
import string
# Create your models here.
def generate_unique_code():
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Teacher.objects.filter(code=code).count() == 0:
            break

    return code

class Teacher(models.Model):
    name = models.CharField(max_length=30)
    subject = models.CharField(max_length=30, default=None)
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    student_count = models.IntegerField(default=0)
    attendance_taken = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    

class Student(models.Model):
    first = '1st'
    second = '2nd'
    third = '3rd'
    fourth = '4th'
    YEAR_CHOICES = [(first,'First'),(second,'Second'),
                    (third, 'Third'),
                    (fourth, 'Fourth')]
    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=20)  
    enrollment_no = models.CharField(max_length=15,default='01476803118')
    attendance_given = models.BooleanField(default=False)
    year_choices = models.CharField(max_length=10, choices=YEAR_CHOICES, default=first)


class Room(models.Model):
    teacher_name = models.CharField(max_length=30)
    subject = models.CharField(max_length=50)
    max_students_allowed = models.IntegerField(default=0)
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)


    
