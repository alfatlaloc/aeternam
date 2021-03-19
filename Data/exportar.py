import pandas as pd
import requests
import json
import datetime

url = 'http://localhost:8080/'

def getMonth(time_str):
    time_str = "01 " + time_str
    date_time_obj = datetime.datetime.strptime(time_str, '%d %B %Y')
    print('Month:', date_time_obj.month)
    return date_time_obj.month

def getDate(time_str):
    time_str = "01 " + time_str
    date_time_obj = datetime.datetime.strptime(time_str, '%d %B %Y')
    print('Date:', date_time_obj.isoformat())
    return date_time_obj.isoformat()


val = input("Enter CSV name: ")
print("Reading: CSV/"+val+".csv")

df = pd.read_csv('CSV/'+val+'.csv')

print(df.head())

print("Select a Schema: \n 1.Year \n 2.Month \n 3.Week \n 4.Day \n 5.Hour")

val = int(input("Enter option: "))
print(val)
if val == 1:
    print("Year Schema")
    for index, row in df.iterrows():
        EURUSD = {
            'keyName': row['keyName'],
            'Date': row['Date'],
            'High': row['High'],
            'Low': row['Low'],
            'Close': row['Close'],
            'Open': row['Open'],
            'Annual_Change': row['Annual_Change'],
            'ACP': row['ACP']
            }
        print(EURUSD)
        r = requests.post(url=url + 'Year', data=EURUSD)
        print(r.text)
elif val == 2:
    print("Month Schema")
    for index, row in df.iterrows():

        EURUSD = {
            'keyName': getMonth(row['Date']),
            'Date': getDate(row['Date']),
            'High': row['High'],
            'Low': row['Low'],
            'Close': row['Close'],
            'Open': row['Open'],
            'Change': row['Change'].replace('%',''),
            }
        print(EURUSD)
        r = requests.post(url=url + 'Month', data=EURUSD)
        print(r.text)
        

    


