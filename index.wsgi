import sae
from wordcard import wsgi

application = sae.create_wsgi_app(wsgi.application)
