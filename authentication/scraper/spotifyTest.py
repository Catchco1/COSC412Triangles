import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json
from flask import Flask
from flask_cors import CORS
from flask import request 

app = Flask(__name__)
CORS(app, resources={r"/bands/*": {"origins": "*"}})


@app.route('/bands')
def getRelatedBands():
    client_credentials_manager = SpotifyClientCredentials(client_id='17a113aedfc94e72bd0c8b7211c10ac4', client_secret='21bf094d7bb740d7b31481d93c901714')
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)
    name = request.args.get('name', default = '*', type = str)
    results = sp.search(q='artist:' + name, type='artist')
    artistId = results['artists']['items'][0]['id']

    related =  sp.artist_related_artists(artistId)['artists']
    output = {}
    names = []
    for artist in related:
        names += [artist['name']]
    output['related'] = names
    return output