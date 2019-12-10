#!/usr/bin/env python
# coding: utf-8

# In[23]:


import os
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity # For calculating similarity matrix
from sklearn.neighbors import NearestNeighbors
import json
import csv
from flask import Flask


# In[24]:



DIR_PATH =(r"C:\Users\Owner\Documents\C412\kmn")  #Get currect directory

lfm = pd.read_csv(DIR_PATH + "//LastFM_Matrix.csv") #Load dataset
lfm.head()


# In[25]:


songs = pd.DataFrame(lfm.columns)
songs.head(10)


# In[26]:


lfm_songs = lfm.drop("user",axis =1) #drop user column
lfm_songs.head() # Show Head


# In[27]:


lfm_songs.shape #gives out total rows and columns


# In[28]:


data_similarity = cosine_similarity(lfm_songs.T) #
data_similarity


# In[29]:


type(data_similarity)


# In[30]:


data_similarity_df = pd.DataFrame(data_similarity, columns=(lfm_songs.columns), index=(lfm_songs.columns))


# In[31]:


data_similarity_df.head() # similarity Matrix


# In[32]:


data_similarity_df.index.is_unique # check if there is no repeated songs


# In[33]:


neigh = NearestNeighbors(n_neighbors=10)

neigh.fit(data_similarity_df) # Fit the data


# In[34]:


#Copy the predicted data to a new DataFrame
model = pd.DataFrame(neigh.kneighbors(data_similarity_df, return_distance=False))
model.head() #gives you integer values instead of song names


# In[35]:


final_model = pd.DataFrame(data_similarity_df.columns[model], index=data_similarity_df.index)#gives names with respect to songs


final_model.to_json(DIR_PATH + "//final.json")

# In[40]:


#f=open("search.txt","r")
#value=f.read()
#print(value)


# In[41]:



#for j in final_model.columns:
 # if final_model[0][j] == value:
    #print (j)
  #  break
#row_1=final_model.iloc[j]
#print(final_model.iloc[j])


#rt = final_model.iloc[j]
