from rest_framework import serializers
from .models import Teacher, Student, Room

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ('id','name', 'subject', 'code', 'student_count', 'attendance_taken')


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('id','first_name', 'last_name', 'year_choices', 'attendance_given')


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id','teacher_name', 'subject', 'max_students_allowed', 'code')