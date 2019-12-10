
import numpy as np
from flask import Flask, request, jsonify, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def hello_world():
   return "Hello, World!"

@app.route('/predict_api',methods=['GET'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    #Find the file that Model2.py made
    #should be replaced with your directory.
    DIR_PATH =(r"C:\Users\Owner\Documents\C412\kmn")
    df = pd.read_json (DIR_PATH + "//final.json")
    
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

if __name__ == "__main__":
    app.run(debug=True)