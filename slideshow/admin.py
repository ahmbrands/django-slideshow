from django.contrib import admin
from cbirt.slideshow.models import Slide, Slideshow

class SlideshowAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}

class SlideAdmin(admin.ModelAdmin):
    list_display = ('title', 'display')
    list_editable = ('display',)
    
admin.site.register(Slideshow, SlideshowAdmin)
admin.site.register(Slide, SlideAdmin)