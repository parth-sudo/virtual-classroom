from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('staff/', index),
    path('<str:teacherName>/', index),
    path('studentArea/', index),
    # path('student/', index),
    # path('rooms/', index),

]
