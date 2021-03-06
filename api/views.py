from django.shortcuts import render
from rest_framework import generics, status
from .models import Teacher,Student,Room
from .serializers import TeacherSerializer, StudentSerializer, RoomSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class TeacherCreateView(generics.CreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class TeacherListView(generics.ListAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class TeacherUpdateView(generics.UpdateAPIView):
     queryset = Teacher.objects.all()
     serializer_class = TeacherSerializer

class TeacherDeleteView(generics.DestroyAPIView):
     queryset = Teacher.objects.all()
     serializer_class = TeacherSerializer

class GetTeacherName(APIView):
    serializer_class = TeacherSerializer
    lookup_url_kwarg = 'teacher'

    def get(self, request, format=None):
        teacher = request.GET.get(self.lookup_url_kwarg)
        if teacher != None:
            Tname = Teacher.objects.filter(name=teacher)
            if len(Tname) > 0:
                print(Tname)
                data = TeacherSerializer(Tname[0]).data
                data['is_host'] = self.request.session.session_key == Tname[0].code
                return Response(data, status=status.HTTP_200_OK)
            else:
                return Response({'Name Not found': 'Invalid Name'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Name not found in request.'}, status=status.HTTP_400_BAD_REQUEST)



class StudentCreateView(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentListView(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentUpdateView(generics.UpdateAPIView):
     queryset = Student.objects.all()
     serializer_class = StudentSerializer

class StudentDeleteView(generics.DestroyAPIView):
     queryset = Student.objects.all()
     serializer_class = StudentSerializer


class RoomCreateView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class RoomListView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer    

