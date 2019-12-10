import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import json
from flask_cors import CORS
from flask import Flask, request, jsonify, render_template
import pandas as pd

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

@app.route('/predict_api',methods=['GET'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    #Find the file that Model2.py made
    #should be replaced with your directory.
    DIR_PATH =(r".//final.json")
    df = pd.read_json (DIR_PATH)
    
    rt = df.iloc[0]

    #Get request from the search terms
    search = request.args.get('search')
    #print(search)
    search = search.replace("+", " ").upper()

    #Finds the search term
    for j in range (0, df.shape[0]):
        if df[0][j].upper() == search: #print (j)
            break
    rt = df.iloc[j]
   
   #Returns this if there is no match
    if j == df.shape[0]-1:
        rt = {
            "0":"0",
            "1":"1",
            "2":"2",
            "3":"3",
            "4":"4",
            "5":"5", 
            "6":"6",
            "7":"7",
            "8":"8",
            "9":"9"}

    
    #Takes rt and turns it into a series, only applies if 
    #we failed to find a match
    print(rt)
    rt = pd.Series(rt).to_json()
    return jsonify(rt)