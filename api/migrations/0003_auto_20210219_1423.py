# Generated by Django 3.0.5 on 2021-02-19 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_teacher_attendance_taken'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='code',
            field=models.CharField(default='', max_length=8, unique=True),
        ),
        migrations.AddField(
            model_name='teacher',
            name='studentCount',
            field=models.IntegerField(default=0),
        ),
    ]
