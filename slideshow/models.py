from django.db import models
from django.template.defaultfilters import slugify
from django.utils.translation import ugettext_lazy as _
from datetime import datetime

class Slideshow(models.Model):
    title = models.CharField(max_length=50)
    slug = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    auto = models.CharField(default="true", help_text="true or false, does the slideshow start automatically", max_length=50)
    speed = models.CharField(default="500", help_text="how long, in milliseconds, is the transition effect", max_length=50)
    timeout = models.CharField(default="4000", help_text="how long does each slide stay up in milliseconds", max_length=50)
    pager = models.CharField(default="false", help_text="do we want a pager to show", max_length=50)
    nav = models.CharField(default="false", help_text="do we want the pager to be clickable", max_length=50)
    created = models.DateTimeField(_('created'), blank=True, default=datetime.now, editable=False)

    class Meta:
        verbose_name = ('Slideshow')
        verbose_name_plural = ('Slideshows')
        ordering = ('title',)
    
    def __str__(self):
        return self.title

class Slide(models.Model):
    """
    An individual slide.
    
    The slide contains the name of the slide, the slide copy and a slide image.
    
    """
    title = models.CharField(blank=True, max_length=200, help_text="This is the slide's title.")
    content = models.TextField(blank=True)
    media_embed = models.TextField(blank=True, help_text="This can be an image or a video from anywhere. Just grab the embed code.")
    image = models.FileField(upload_to="slideshow", blank=True, help_text="You can upload an image straight to the slideshow")
    url = models.CharField(blank=True, max_length=200, help_text="When this slide is clicked, where do you want the user to go?")
    slideshow = models.ForeignKey(Slideshow, help_text="What slideshow does this slide belong to?")
    order = models.IntegerField(help_text="You must supply an order")
    created = models.DateTimeField(_('created'), blank=True, default=datetime.now, editable=False)
    display = models.BooleanField(default=False)

    class Meta:
        ordering = ('order',)
        verbose_name = _('Slide')
        verbose_name_plural = _('Slides')

    def __unicode__(self):
        return self.title