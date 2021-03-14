import pandas as pd
import requests
import json

url = 'http://localhost:8080/Year'

val = input("Enter CSV name: ") 
print("Reading: CSV/"+val+".csv") 

df = pd.read_csv('CSV/'+val+'.csv')

print(df.head())


for index, row in df.iterrows():
    EURUSD = {
        'keyName' : row['keyName'],
        'Date' : row['Date'],
        'High' : row['High'],
        'Low' : row['Low'],
        'Close' : row['Close'],
        'Open' : row['Open'],
        'Annual_Change' : row['Annual_Change'],
        'ACP': row['ACP']
    }
    print(EURUSD)
    r = requests.post(url = url, data = EURUSD)
    print(r.text)

