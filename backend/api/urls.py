from django.urls import path
from . import views

urlpatterns = [
    path("user/register/", views.RegisterUser.as_view()),
    path("user/get-all-users", views.AllUsersView.as_view()),
    path("user/login", views.LoginUser.as_view()),
    path("product/all", views.AllProducts.as_view()),
    path("appointment/", views.AppointmentsListCreateView.as_view()),
    path("appointment/<int:pk>/", views.AppointmentsGetUpdateDestroy.as_view())
]