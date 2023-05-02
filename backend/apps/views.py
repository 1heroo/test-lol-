from rest_framework.viewsets import mixins, GenericViewSet
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework.response import Response
from rest_framework import status, generics

from drf_yasg.utils import swagger_auto_schema


from .models import Registration, Work, ReiseUser
from .serializers import (
    RegistrationSerializer,
    WorkSerializers,
    WorkCraeteSerializers,
    ReiseUserSerializer,
    ChangePasswordSerializer
)


class RegistrationViewSet(mixins.CreateModelMixin,
                          mixins.DestroyModelMixin,
                          mixins.UpdateModelMixin,
                          GenericViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    def get_permissions(self):
        if self.action in ['destroy', 'update', 'partail_update']:
            self.permission_classes = [IsAdminUser]
        return super().get_permissions()

class WorkViewSet(mixins.CreateModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.ListModelMixin,
                  GenericViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializers

    def get_permissions(self):
        if self.action in ['destroy', 'update', 'partail_update']:
            self.permission_classes = [IsAdminUser]
        if self.action in ['list', 'retrieve']:
            self.permission_classes = [AllowAny]
        return super().get_permissions()

    def get_serializer_class(self):
        if self.action == 'create':
            return WorkCraeteSerializers
        return super().get_serializer_class()

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context


class ReiseUserView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = ReiseUserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK
)

    @swagger_auto_schema(request_body=ReiseUserSerializer)
    def put(self, request):
        user = request.user
        serializer = ReiseUserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)


class GetQuestionsView(APIView):

    permission_classes = [IsAuthenticated, IsAdminUser]

    def get(self, request):
        queryset = Registration.objects.all()
        serializer = RegistrationSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PasswordChangeView(APIView):
    permission_classes = [IsAuthenticated, ]

    @swagger_auto_schema(request_body=ChangePasswordSerializer)
    def post(self, request):

        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            new_password = request.data['password1']
            user = request.user
            if user.check_password(new_password):
                return Response("New password should not match the old one", status=status.HTTP_400_BAD_REQUEST)
            user.set_password(new_password)
            user.save()
            return Response("Password changed", status=status.HTTP_201_CREATED)
