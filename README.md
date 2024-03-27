## Installation for Backend - Django
- ![terminal](images/Installation.png)
## Django Commands
### Create New App
- python manage.py startapp <app_name>
### Create Super User 
- python manage.py createsuperuser
### Changing Password
- python manage.py changepassword <your_user_name>
## ABOUT Settings.py
- BASE_DIR - dynamically get the root directory
- DEBUG = True - in production server we make it false only for dev server
- ALLOWED_HOSTS - white list domain name and ips
- TEMPLATES  - helps to render frontend templates
- WSGI_APPLICATION - server config
- DATABASES - we can change our db here
- AUTH_PASSWORD_VALIDATORS - builtin pwd validator
- USE_I18N = allow multiple lang
- STATIC_URL