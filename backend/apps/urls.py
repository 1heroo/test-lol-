from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

from rest_framework.routers import DefaultRouter
from .views import (
    RegistrationViewSet,
    WorkViewSet,
    ReiseUserView,
    GetQuestionsView,
    PasswordChangeView
)

router = DefaultRouter()
router.register('registrations', RegistrationViewSet, 'registration')
router.register('works', WorkViewSet, 'work')

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path("profile/", ReiseUserView.as_view(), name="user-profile"),
    path("questions/", GetQuestionsView.as_view(), name="questions"),
    path("change-password", PasswordChangeView.as_view(), name="password-change")
]


urlpatterns += router.urls
