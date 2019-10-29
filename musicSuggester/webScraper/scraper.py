from requests import get
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup
import json

def simple_get(url):
    try:
        with closing(get(url, stream=True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None
    except RequestException as e:
        log_error('Error during requests to {0} : {1}'.format(url,str(e)))
        return None

def is_good_response(resp):
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200 and content_type is not None and content_type.find('html') > -1)

def log_error(e):
    print(e)

def getTags(url):
    raw_html = simple_get(url)
    html = BeautifulSoup(raw_html, 'html.parser')
    tags = html.findAll('a', {'class':'tag'})
    return tags

def main():
    tags = getTags('https://trashbagponchos.bandcamp.com/album/not-safe-for-working-class')
    print(tags.json)
    for tag in tags:
        print(tag.text.lower())

if __name__ == '__main__':
    main()