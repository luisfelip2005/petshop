from django.db import models
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=30, null=False)
    email = models.EmailField(max_length=100, null=False)
    password = models.CharField(max_length=200, null=False)

    def hashPassword(self):
        self.password = make_password(self.password)

    def checkPassword(self, password):
        if check_password(password, self.password):
            return True
        else:
            return False

class Product(models.Model):
    class Category(models.TextChoices):
        ALIMENTO = 'ALIMENTO'
        BRINQUEDO = 'BRINQUEDO'
        PERFUME = 'PERFUME'
        ROUPA = 'ROUPA'
        OUTRO = 'OUTRO'
    name = models.CharField(max_length=100, null=False)
    price = models.CharField(max_length=10, null=False)
    description = models.CharField(max_length=200, null=True, blank=True)
    imageURL = models.CharField(max_length=200, null=True, blank=True)
    ammount = models.CharField(max_length=20, null=True, blank=True)
    category = models.CharField(
        max_length=10,
        choices=Category.choices,
        null=False,   
        blank=False   
    )

class Appointment(models.Model):
    class Service(models.TextChoices):
        BANHO_E_TOSA = 'BANHO E TOSA'
        VACINA = 'VACINA'
        CONSULTA = 'CONSULTA'
    service = models.CharField(
        max_length=20,
        choices=Service.choices,
        null=False,
        blank=False
    )
    date = models.DateField(null=False, blank=False)
    petname = models.CharField(max_length=20, null=False)
    birthday = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    animal = models.CharField(max_length=25, null=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    class Gender(models.TextChoices):
        MASCULINO = "MASCULINO"
        FEMININO = "FEMININO"
    gender = models.CharField(
        choices=Gender.choices,
        max_length=10,
        null=False,
        blank=False
    )