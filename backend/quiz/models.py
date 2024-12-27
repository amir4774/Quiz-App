from django.db import models
from django.contrib.auth.models import User


Categories = [
    ("Linux", "Linux"),
    ("DevOps", "DevOps"),
    ("Code", "Code"),
    ("SQL", "SQL"),
    ("Random", "Random"),
    ("Docker", "Docker"),
    ("CMS", "CMS"),
]

Difficulty = [
    ("Hard" , "Hard"),
    ("Medium", "Meduim"),
    ("Easy","Easy"),
    ("Random", "Random"),
]

class Exam(models.Model):
    examiner = models.ForeignKey(User,on_delete=models.CASCADE)
    rate = models.IntegerField()
    question_numbers = models.IntegerField()
    corrects = models.IntegerField()
    category = models.CharField(max_length=6,choices=Categories)
    difficulty = models.CharField(max_length=6,choices=Difficulty,default='Random')