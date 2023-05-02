from django.contrib import admin
from .models import Registration, Work, WorkImage


class TabularInlineImage(admin.TabularInline):
    model = WorkImage
    extra = 1
    fields = ['image']

class PostAdmin(admin.ModelAdmin):
    exclude = ['slug']

class WorkAdmin(admin.ModelAdmin):
    model = Work
    inlines = [TabularInlineImage]

admin.site.register(Work,WorkAdmin)
admin.site.register(Registration, PostAdmin)
