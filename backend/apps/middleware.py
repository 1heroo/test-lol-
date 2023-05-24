class XForwardedForMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if 'HTTP_X_FORWARDED_FOR' in request.META:
            ip = request.META['HTTP_X_FORWARDED_FOR']
            request.META['REMOTE_ADDR'] = ip
        response = self.get_response(request)
        return response
