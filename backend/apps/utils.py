import re

def normalize_phone(phone):
    phone = re.sub('[^0-9]','', phone)
    if phone.startswith('0'):
        phone = f'996{phone[1:]}'
    if not phone.startswith('996'):
        phone = f'996{phone}'
    phone = f'+{phone}'
    return phone


