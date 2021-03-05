from django.urls import path
from .views import (
    TeacherCreateView, 
    TeacherListView, 
    TeacherUpdateView, 
    TeacherDeleteView, 
    GetTeacherName,

    StudentCreateView,
    StudentUpdateView,
    StudentListView,
    StudentDeleteView,
)


urlpatterns = [
    path('create-teacher/', TeacherCreateView.as_view()),
    path('teacher-list/', TeacherListView.as_view()),
    path('update-teacher/<pk>/', TeacherUpdateView.as_view()),
    path('delete-teacher/<pk>/', TeacherDeleteView.as_view()),
    path('get-teacher', GetTeacherName.as_view()),

    path('create-student/', StudentCreateView.as_view()),
    path('student-list/', StudentListView.as_view()),
    path('update-student/<pk>/', StudentUpdateView.as_view()),
    path('delete-student/<pk>/', StudentDeleteView.as_view()),

    # path('create-room/',)

]
