from rest_framework import serializers
from .models import Registration, Work, WorkImage, ReiseUser
from .utils import normalize_phone


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = "__all__"
        # exclude = 'slug',


class WorkSerializers(serializers.ModelSerializer):
    class Meta:
        model = Work
        exclude = 'slug',

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['carousel'] = WorkImageSerializer(
            instance.works.all(), many=True).data
        return rep


class WorkCraeteSerializers(serializers.ModelSerializer):
    carousel_img = serializers.ListField(
        child=serializers.FileField(),
        write_only=True)

    class Meta:
        model = Work
        fields = '__all__'

    def create(self, validated_data):
        carousel_images = validated_data.pop('carousel_img')
        work = Work.objects.create(**validated_data)
        images = []
        for image in carousel_images:
            images.append(WorkImage(work=work, image=image))
        WorkImage.objects.bulk_create(images)
        return work


class WorkImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkImage,
        fields = 'image',


class ReiseUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReiseUser
        fields = ["username", "phone", "email"]


class ChangePasswordSerializer(serializers.Serializer):
    password1 = serializers.CharField(required=True)
    password2 = serializers.CharField(required=True)

    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError("Passwords don't match")
        return attrs
